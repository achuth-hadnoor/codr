import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";

import AuthedRoute from "./AuthedRoute";
import UnauthedRoute from "./UnauthedRoute";
import Home from "./pages/Home";
import Snip from "./pages/Snip";
import NotFound from "./pages/404View";
import Login from "./pages/Login";
import New from "./pages/New";
import Signup from "./pages/SignUp";
import Folders from './pages/folders'
import { getAllData } from "./api";
import Provider from "./contexts/provider";

class AppRouter extends Component { 
  componentDidMount() {
    getAllData(this.props.dispatch); 
  } 
  render() {
    return (
      <Provider>
        <Router history={this.props.history}>
          <Switch>
            <AuthedRoute component={Home} exact path="/" />
            <AuthedRoute component={New} path="/new" />
            <AuthedRoute component={Snip} path="/snip/:id" />
            <AuthedRoute component={Folders} path="/folders"/>
            <UnauthedRoute component={Login} exact path="/login" />
            <UnauthedRoute component={Signup} exact path="/regester" />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

AppRouter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(AppRouter);