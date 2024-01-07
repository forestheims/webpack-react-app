import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todosSlice.js';
import userReducer from './slices/userSlice.js';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in non-production environments
});

export default store;
