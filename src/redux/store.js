import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsSlice from './Phonebook/phonebook-slice';
import thunk from 'redux-thunk';
import authReducer from './auth/auth-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const authPersistReducer = persistReducer(authPersistConfig, authReducer);
export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    auth: authPersistReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REGISTER, PAUSE, REHYDRATE, PERSIST, PURGE],
      },
    }).concat(logger),
  thunk,
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
