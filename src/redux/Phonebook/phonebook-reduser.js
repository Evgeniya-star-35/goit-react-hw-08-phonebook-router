import { createReducer, createSlice } from '@reduxjs/toolkit';
import { changeFilter } from '../Phonebook/phonebook-actions';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from './phonebook-operations';

export const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], loading: false, error: null },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      contacts: payload,
      loading: false,
      error: null,
    }),
    [fetchContacts.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [fetchContacts.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),

    [addContact.fulfilled]: (state, { payload }) => ({
      ...state,
      contacts: [...state.contacts, payload],
      loading: false,
      error: null,
    }),
    [addContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [addContact.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),

    [deleteContact.fulfilled]: (state, { payload }) => ({
      ...state,
      contacts: state.contacts.filter(({ id }) => id !== payload),
    }),

    [deleteContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [deleteContact.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
});

export default contactsSlice.reducer;
