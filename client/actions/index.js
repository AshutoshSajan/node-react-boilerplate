import axios from 'axios';
import { action } from '../utils/helper';

const loginUser = (formData, cb) => {
  return async dispatch => {
    dispatch({ type: 'AUTH_START' });

    try {
      const res = await axios.post('/api/v1/auth/login', formData);
      console.log(res.data);

      dispatch(action('AUTH_SUCCESS', { user: res.data.mentor }));

      localStorage.setItem('authToken', res.data.token);
      cb();
    } catch (err) {
      dispatch(action('AUTH_ERROR', { error: 'Something went wrong.' }));
    }
  };
};

const verifyUser = token => {
  return async dispatch => {
    dispatch({ type: 'AUTH_START' });

    try {
      const res = await axios.get('/api/v1/auth/me', {
        headers: {
          authorization: token
        }
      });

      dispatch(action('AUTH_SUCCESS', { user: res.data.user }));
    } catch (err) {
      dispatch(action('AUTH_ERROR', { error: 'Something went wrong.' }));
    }
  };
};

const registerUser = (formData, cb) => {
  return async dispatch => {
    dispatch({ type: 'AUTH_START' });

    try {
      const res = await axios.post('/api/v1/auth/register', formData);
      console.log(res.data);

      dispatch(action('AUTH_SUCCESS', { user: res.data.user }));

      localStorage.setItem('authToken', res.data.token);
      cb();
    } catch (err) {
      dispatch(action('AUTH_ERROR', { error: 'Something went wrong.' }));
    }
  };
};

const logoutUser = cb => {
  return async dispatch => {
    localStorage.clear();
    dispatch(action('LOGOUT_USER'));
    cb();
  };
};

export { loginUser, verifyUser, registerUser, logoutUser };
