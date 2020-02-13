import React, { Component } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';

import { registerUser } from '../../actions';

// dispatch as a prop.
class Register extends Component {
  constructor(props) {
    super(props);

    state = {
      user: {
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { userName, email, password, confirmPassword } = this.state.user;

    if (!userName || !email || !password || !confirmPassword) {
      return alert('Username, email, password are must.');
    }

    if (password.length < 8) {
      return alert('Password must contain 8 characters.');
    }

    if (!validator.isEmail(email)) {
      return alert('Invalid email.');
    }

    this.props.dispatch(
      registerUser(this.state.user, () => {
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
    const { userName, email, password, confirmPassword } = this.state.user;
    const { isAuthInProgress, authError } = this.props.auth;

    return (
      <div>
        <div className='container'>
          <div className='form columns'>
            <div className='column is-one-third is-offset-one-third'>
              {authError ? <label>{authError}</label> : ''}

              <h1>Register</h1>
              <div className='field'>
                <label className='label'>Name</label>
                <div className='control'>
                  <input
                    onChange={this.handleChange}
                    className='input'
                    type='text'
                    name='userName'
                    value={userName}
                    placeholder='e.g. Jhon Doe'
                  />
                </div>
              </div>

              <div className='field'>
                <label className='label'>Email</label>
                <div className='control'>
                  <input
                    onChange={this.handleChange}
                    className='input'
                    type='email'
                    name='email'
                    value={email}
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
                    name='password'
                    value={password}
                    placeholder='e.g. qwerty123'
                  />
                </div>
              </div>

              <div className='field'>
                <label className='label'>Confirm Password</label>
                <div className='control'>
                  <input
                    onChange={handleChange}
                    className='input'
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    placeholder='e.g. qwerty123'
                  />
                </div>
              </div>
              {isAuthInProgress ? (
                <p>Registration in process...</p>
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

export default connect(mapStateToProps)(Register);
