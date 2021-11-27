import { createSlice } from '@reduxjs/toolkit';
import authActions from './auth-actions';
const {
  registerRequest,
  registerSuccess,
  registerError,
  logInSuccess,
  logInError,
  logoutSuccess,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} = authActions;
const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLoading: false,
  isAuth: false,
  error: null,
  isGetCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerSuccess]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isAuth = true;
    },
    [registerRequest]: (state, _) => {
      state.isLoading = true;
    },
    [registerError]: (state, action) => {
      state.error = action.payload.message;
    },
    [logInSuccess]: (state, { payload }) => {
      console.log(payload);
      state.user = payload.user;
      state.token = payload.token;
      state.isAuth = true;
    },
    [logInError]: (state, action) => {
      state.error = action.payload;
    },
    [logoutSuccess]: (state, _) => {
      state.user = { name: '', email: '' };
      state.token = '';
      state.isAuth = false;
      state.error = null;
    },
    [getCurrentUserRequest]: state => {
      state.isGetCurrentUser = false;
    },
    [getCurrentUserSuccess]: (state, { payload }) => {
      state.user = payload;
      state.isAuth = true;
    },
    [getCurrentUserError]: state => {
      state.isGetCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
