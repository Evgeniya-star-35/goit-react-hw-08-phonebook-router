import { configureStore } from '@reduxjs/toolkit';
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
import contactsReducer from './Phonebook/phonebook-reducer';
import authReducer from './auth/auth-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const authPersistReducer = persistReducer(authPersistConfig, authReducer);
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authPersistReducer,
  },
  middleware: getDefaultMiddlaware =>
    getDefaultMiddlaware({
      serializableCheck: {
        ignoredActions: [FLUSH, REGISTER, PAUSE, REHYDRATE, PERSIST, PURGE],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
