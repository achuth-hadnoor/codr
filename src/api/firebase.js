import app from "firebase/app";
import { firebaseConfig } from "./../constants";
import "firebase/auth";
import "firebase/database";
import {  updateUser } from "./";

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

            this.auth.signInWithPopup(provider).then(function (result) { 
                resolve(user)
            }).catch(function (error) { 
                var errorCode = error.code; 
                reject(errorCode)
            });
        });
    }
    signOut() {
        const cfg = {
            user: {
                uid: "",
                snips: [],
                tags: [],
                createOn: "Today",
                onboard: false,
                pro: false
            }
        }
        updateUser(cfg);
        localStorage.clear();
        return this.auth.signOut();
    }

}

export default new Firebase();