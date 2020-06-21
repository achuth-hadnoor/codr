import React from "react"; 
import { Provider } from "react-redux"; 
import { createBrowserHistory } from "history";

import AppRouter from "./AppRouter.js"; 
import configureStore from "./store.js";

let initialState = {};
if ("authedUser" in localStorage) {
  try {
    initialState["authedUser"] = localStorage["authedUser"];
  } catch (e) {
    initialState["authedUser"] = null;
  }
}

let store;
let history; 
  history = createBrowserHistory();
  store = configureStore()
 
const App = () => (
  <Provider store={store}>
    <AppRouter history={history} />
  </Provider>
);

export default App;