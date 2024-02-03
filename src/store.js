import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todosSlice.js';
import userReducer from './slices/userSlice.js';
import cookieReducer from './slices/cookieSlice.js';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { combineReducers } from 'redux'; // defaults to localStorage for web
import expiryMiddleware from './middleware/dataExpiration.js';

const persistConfig = {
  key: 'root', // Key to use in storage
  storage, // Storage method (local storage)
  whitelist: ['user', 'cookie'], // Which reducers to store (omit this to store everything)
  blacklist: ['todos'], // Which reducers to not store
};

const rootReducer = combineReducers({
  todos: todosReducer,
  user: userReducer,
  cookie: cookieReducer,
  // ... other reducers
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/PURGE'],
        // Ignore serializability check for specific actions
      },
    }).concat(expiryMiddleware),
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in non-production environments
});

const persistor = persistStore(store);

export { persistor, store };
