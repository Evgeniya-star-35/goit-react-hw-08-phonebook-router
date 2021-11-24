import { createSlice } from '@reduxjs/toolkit';
import { register, logOut, logIn, getCurrentUser } from './auth-operations';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isAuth: false,
  isGetCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isAuth = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isAuth = true;
      // state.isGetCurrentUser = true;
    },
    [logOut.fulfilled](state, { payload }) {
      state.user = { name: '', email: '' };
      state.token = '';
      state.isAuth = false;
    },
    [getCurrentUser.pending](state) {
      state.isGetCurrentUser = true;
    },
    [getCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isAuth = true;
      state.isGetCurrentUser = false;
    },
    [getCurrentUser.rejected](state) {
      state.isGetCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
