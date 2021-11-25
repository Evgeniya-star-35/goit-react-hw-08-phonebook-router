import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWidthValue, getState }) => {
    const state = getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      return rejectWidthValue();
    }
    token.set(persistToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      rejectWidthValue(error);
    }
  },
);
