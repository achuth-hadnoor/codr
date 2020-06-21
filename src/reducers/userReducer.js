
var initialState = {
    uid:null,
    onboard:false,
    name:'Unknown'
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER': 
      return { ...state, user: action.user };
    default:
      return state;
  }
};