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
  constructor(props) {
    super(props);
    this.handleKeypress = this.handleKeypress.bind(this);
  }
  componentDidMount() {
    getAllData(this.props.dispatch);
    document.addEventListener("keydown", this.handleKeypress, true);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeypress, true);
  }

  handleKeypress(event) {
    if (event.keyCode === 27) {
      return this.props.history.push({
        pathname: "/home",
        query: { tab: "Today" }
      });
    }
    if (
      (event.ctrlKey || event.metaKey || event.altKey) &&
      event.keyCode === 78
    ) {
      return this.props.history.push("/snip");
    }

    if ((event.ctrlKey || event.metaKey) && event.keyCode === 49) {
      return this.props.history.push({
        pathname: "/home",
        query: { tab: "Today" }
      });
    }

    if ((event.ctrlKey || event.metaKey) && event.keyCode === 50) {
      return this.props.history.push({
        pathname: "/home",
        query: { tab: "Backlog" }
      });
    }

    if ((event.ctrlKey || event.metaKey) && event.keyCode === 51) {
      return this.props.history.push({
        pathname: "/home",
        query: { tab: "Done" }
      });
    }
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
            {/* <UnauthedRoute
              component={ForgotPassword}
              exact
              path="/forgot-password"
            />
            <UnauthedRoute
              component={ResetPassword}
              exact
              path="/reset-password"
            /> */}
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