import { createSlice } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';

import {
  addContact,
  fetchContacts,
  deleteContact,
} from './phonebook-operations';
import { changeFilter } from './phonebook-actions';
const initialContactsState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  extraReducers: {
    [addContact.fulfilled]: (state, { payload }) => {
      state.contacts = [...state.contacts, payload];
      state.isLoading = false;
      state.error = null;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});
export const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
export default contactsSlice.reducer;
