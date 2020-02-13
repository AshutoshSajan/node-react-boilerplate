import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../common/Header';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
      </div>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps)(HomePage);
