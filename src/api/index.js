import fire from './firebase'
export const getUser = (dispatch, userID) => {
    fire.getUserInfo(userID).then(u => {
        debugger
    }).catch(e => {
        debugger
    })
}
export const getWorkspaces = (dispatch) => { }
export const getSharedWorkspaces = (dispatch) => { }
export const getSpages = (dispatch) => { }
export const getSnippets = (dispatch) => { }

export const getAllData = (dispatch) => {
    let userID = localStorage.getItem('authedUser');
    if (userID) {
        getUser(dispatch, userID);
        getWorkspaces(dispatch)
        getSharedWorkspaces(dispatch)
        getSpages(dispatch)
        getSnippets(dispatch)
    }
}