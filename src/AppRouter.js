import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import nprogress from 'nprogress'
import 'nprogress/nprogress.css' 

import AuthedRoute from "./AuthedRoute";
import UnauthedRoute from "./UnauthedRoute";
import Login from './pages/Login'
import NotFound from './pages/404'
import Home from './pages'
import workspaces from './pages/workspaces'
import settings from './pages/settings'
import { ThemeWrapper } from "./services/theme"; 
nprogress.start();
class AppRouter extends Component {
    componentDidMount() {
        var userID = localStorage.getItem('authedUser'); 
        if(userID){
            var user = JSON.parse(localStorage.getItem('user'))
            this.props.dispatch({type:'UPDATE_USER',user})
        }
        nprogress.done();
    }
    render() {
        return (
            <Router history={this.props.history}>
                <ThemeWrapper user={this.props.user}> 
                        <Switch>
                            <AuthedRoute component={Home} exact path="/" />
                            <AuthedRoute component={settings} exact path="/settings" />
                            <AuthedRoute component={workspaces} path={["/w", "/w/:wid"]} />
                            <UnauthedRoute component={Login} exact path="/login" />
                            <Route component={NotFound} />
                        </Switch> 
                </ThemeWrapper>
            </Router>
        );
    }
}

AppRouter.propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

const mapStateToProps = state =>({ user: state.user })

export default connect(mapStateToProps)(AppRouter);
 