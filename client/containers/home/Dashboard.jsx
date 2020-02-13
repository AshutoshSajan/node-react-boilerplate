import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Dashboard...</h1>
      </div>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps)(Dashboard);
