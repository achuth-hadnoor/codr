
var initialState = [{
    id:'1',
    title:'mindHQ',
},{
    id:'2',
    title:'snipnote',
},{
    id:'3',
    title:'portfolio',
},{
    id:'4',
    title:'website',
},{
    id:'5',
    title:'styled components',
}]
export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_WORKSPACES': 
    state = action.workspaces
      return state;
    default:
      return state;
  }
};