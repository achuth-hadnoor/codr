
var initialState = [{
    id:'1',
    title:'mindHQ',
}]
export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_WORKSPACE': 
      return { ...state, workspaces: action.workspaces };
    default:
      return state;
  }
};