import React, { Component } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';

import { loginUser } from '../../actions';

// dispatch as a prop.
class Login extends Component {
  constructor(props) {
    super(props);

    state = {
      user: {
        email: '',
        password: ''
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      return alert('Email and password are must.');
    }

    if (password.length < 6) {
      return alert('Password must contain 6 characters.');
    }

    if (!validator.isEmail(email)) {
      return alert('Invalid email.');
    }

    this.props.dispatch(
      loginUser({ email, password }, () => {
        console.log('called back');
        this.props.history.push('/');
      })
    );
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  };

  render() {
    const { isAuthInProgress, authError } = this.props.auth;

    return (
      <div>
        <div className='container'>
          <div className='form columns'>
            <div className='column is-one-third is-offset-one-third'>
              {authError ? <label>{authError}</label> : ''}

              <h1>Login</h1>
              <div className='field'>
                <label className='label'>Email</label>
                <div className='control'>
                  <input
                    onChange={this.handleChange}
                    className='input'
                    type='email'
                    placeholder='e.g. example@gmail.com'
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Password</label>
                <div className='control'>
                  <input
                    onChange={handleChange}
                    className='input'
                    type='password'
                    placeholder='e.g. qwerty123'
                  />
                </div>
              </div>
              {isAuthInProgress ? (
                <p>Logging in...</p>
              ) : (
                <button onClick={this.handleSubmit} className='btn'>
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps)(Login);
