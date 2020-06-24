var initialState = { 
    autheduser : null,
    onboard :true,
    pro:false,
    theme:'blaze'
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            let user = action.user 
            user.onboard = state.onboard;
            user.theme = state.theme;
            return { ...user };
        default:
            return state;
    }
};