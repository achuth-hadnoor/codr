import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";

import AuthedRoute from "./AuthedRoute";
import UnauthedRoute from "./UnauthedRoute"; 

import { getAllData } from "./api"; 

import onboard from './pages/onboard'
import Login from './pages/Login'
import Home from './pages'
import workspaces from "./pages/workspaces"; 
import NotFound from './pages/404'
import settings  from "./pages/settings";
class AppRouter extends Component { 
  componentDidMount() {
    getAllData(this.props.dispatch); 
  } 
  render() {
    return ( 
        <Router history={this.props.history}>
          <Switch>
            <AuthedRoute component={Home} exact  path = "/" />     
            <UnauthedRoute component={onboard} exact path="/onboarding" />
            <UnauthedRoute component={Login} exact path="/login" /> 
            <AuthedRoute component={settings} exact path="/settings" />   
             
            <AuthedRoute component={workspaces}  path="/w/:wid" />          
            <AuthedRoute component={workspaces} exact path="/w" />     
            
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