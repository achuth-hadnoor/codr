import fire from './firebase'
export const getUser = (dispatch, userID) => {
    fire.getUserInfo(userID).then(u => {
        dispatch({ type: 'UPDATE_USER', user: u }) 
        dispatch({ type: 'UPDATE_WORKSPACES', workspaces: u.workspaces })
    }).catch(e => {
    })
}
export const updateUser = (dispatch, user) => {
    fire.updateUserInfo(user).then((u) => { 
        dispatch({ type: 'UPDATE_USER', user: u })
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