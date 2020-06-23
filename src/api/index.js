export const getAllData = (dispatch)=>{
    let userID = localStorage.getItem('authedUser');
    if(userID){
        const user ={
            authedUser:userID,
            onboard:false
        }
        dispatch({type:'UPDATE_USER',user:user})
    }
    

}
export const getUser = ()=>{}
export const updateUser = ()=>{}