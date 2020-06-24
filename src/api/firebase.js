import app from "firebase/app";
import { firebaseConfig } from "./../constants";
import "firebase/auth";
import "firebase/database";

class Firebase {
    constructor() {
        if (app.apps.length === 0) {
            app.initializeApp(firebaseConfig);
            this.auth = app.auth();
            this.db = app.database()
            this.user = {};
        }
    }
    login(dispatch, user) {
        return new Promise((resolve, reject) => {
            var provider = new app.auth.GithubAuthProvider();
            this.auth.signInWithPopup(provider).then((result) => {
                let { user } = result
                this.getUserInfo(user.uid).then((u) => {
                    resolve(u)
                })
            }).catch(function (error) {
                var errorCode = error.code;
                reject(errorCode)
            });
        });
    }

    getUserInfo(uid) {
        return new Promise(async (resolve, reject) => {
            let user = app.auth().currentUser;
            app.database().ref('users/' + uid).once('value').then(snapshot => {
                if (snapshot.val() === null) {
                    this.user = {
                        uid: user.uid,
                        name: user.displayName,
                        email: user.email,
                        verified: user.emailVerified,
                        photoURL: user.photoURL,
                        createdOn: user.metadata.creationTime,
                        lastLogin: user.metadata.lastSignInTime,
                        accessToken: '',
                        workspaces: [
                            {
                                id: uid,
                                title: user.email + '-workspace',
                                members: [{ uid: user.uid, access: 'OWNER' }],
                                private: true
                            }
                        ]
                    }
                    app.database().ref('users/' + uid).set(user);
                    return resolve(this.user)
                }
                return snapshot.val()
            }).catch(e => {
                app.database().ref('users/' + uid).set({
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    verified: user.emailVerified,
                    photoURL: user.photoURL,
                    createdOn: user.metadata.creationTime,
                    lastLogin: user.metadata.lastSignInTime,
                    accessToken: '',
                    workspaces: [
                        {
                            id: uid,
                            title: user.email + '-workspace',
                            members: [{ uid: user.uid, access: 'OWNER' }],
                            private: true
                        }
                    ]
                });
                resolve({
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    verified: user.emailVerified,
                    photoURL: user.photoURL,
                    createdOn: user.metadata.creationTime,
                    lastLogin: user.metadata.lastSignInTime,
                    accessToken: '',
                    workspaces: [
                        {
                            id: uid,
                            title: user.email + '-workspace',
                            members: [{ uid: user.uid, access: 'OWNER' }],
                            private: true
                        }
                    ]
                })
            })


        })
    }

    signOut() { 
        localStorage.clear();
        return this.auth.signOut();
    }

}

export default new Firebase();