import {createStore,combineReducers} from 'redux'
import userReducer from './reducers/userReducer'

const RootReducer = combineReducers({
  user: userReducer
})

const configureStore = ()=>createStore(RootReducer);
export default configureStore;