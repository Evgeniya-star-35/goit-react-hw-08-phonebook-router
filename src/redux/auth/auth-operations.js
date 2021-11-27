import axios from 'axios';
import { toast } from 'react-toastify';

import authActions from './auth-actions';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = userData => dispatch => {
  dispatch(authActions.registerRequest());

  axios
    .post('/users/signup', userData)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch(error => dispatch(authActions.registerError(error)));
};

export const logIn = userData => dispatch => {
  dispatch(authActions.logInRequest());

  axios
    .post('/users/login', userData)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.logInSuccess(response.data));
    })
    .catch(error => {
      dispatch(authActions.logInError(error.message));
      toast.error(error.message);
    });
};

export const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch(error => authActions.getCurrentUserError(error));
};

export const logOut = () => dispatch => {
  dispatch(authActions.logoutRequest());

  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(error => dispatch(authActions.logoutError(error)));
};
