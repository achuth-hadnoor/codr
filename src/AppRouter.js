import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";

import AuthedRoute from "./AuthedRoute";
import UnauthedRoute from "./UnauthedRoute"; 
import Login from './pages/Login'
import NotFound from './pages/404'
import Home from './pages'
import workspaces from './pages/workspaces'
class AppRouter extends Component {
 
  render() {
    return ( 
        <Router history={this.props.history}>
          <Switch>
            <AuthedRoute component={Home} exact path="/" />
            <AuthedRoute component={workspaces} path={["/w","/w/:wid"]} /> 
            <UnauthedRoute component={Login} exact path="/login" />  
            <Route component={NotFound} />
          </Switch>
        </Router>
       
    );
  }
}

AppRouter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(AppRouter);
