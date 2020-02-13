import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/index';

const Header = props => {
  handleLogout = () => {
    props.dispatch(logoutUser(), () => {
      props.history.push('/');
    });
  };

  return (
    <nav
      style={{ background: 'teal' }}
      className='navbar'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          <p className='title'>Reminder App</p>
        </Link>
        <a
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div className='navbar-end'>
        <div className='navbar-item'>
          <div className='buttons'>
            {props.auth.isAuthenticated ? (
              <button className='button is-primary' onClick={handleLogout}>
                <strong>Logout</strong>
              </button>
            ) : (
              <>
                <Link className='button is-primary' to='/register'>
                  <strong>Register</strong>
                </Link>
                <Link className='button is-primary' to='/login'>
                  <strong>Login</strong>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = store => store;

export default connect(mapStateToProps)(Header);
