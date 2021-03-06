import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "../containers/Login.js";
import Register from "../containers/Register.js";
import UserInfo from "../containers/UserInfo.js";

import { loadTokenFromCookie } from "../actions/actions";

class App extends Component {
  componentWillMount() {
    const loadToken = this.props.loadToken;
    loadToken();
  }
  render() {
    return (
      <div className="App">
        <div className="grid-50-50">
          <h1>Youre About to Have a Nice Wardrobe</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loadToken: () => dispatch(loadTokenFromCookie())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
