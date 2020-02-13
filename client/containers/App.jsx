import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './auth/Login';
import Register from './auth/Register';
import HomePage from './home/HomePage';

import { verifyUser } from '../actions/index';

class App extends Component {
  componentDidMount() {
    var authToken = localStorage.getItem('authToken');

    if (authToken) {
      this.props.dispatch({
        type: 'TOKEN_VERIFICATION_START'
      });
      this.props.dispatch(verifyUser(authToken));
    }
  }

  render() {
    return (
      <div>
        <h1>hello world!</h1>
        {this.props.auth.isIdentifyingToken ? null : (
          <Router>
            <Route exact path='/' component={HomePage} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Router>
        )}
      </div>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps)(App);
