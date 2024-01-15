import { createSlice } from '@reduxjs/toolkit';
import { logIn, signOut, signUp } from '../services/subabase/auth/auth';
import { persistor } from '../store';

const EXPIRY_DURATION = 86400000; // 24 hours in milliseconds

const initialState = {
  user: null, // The user object (null when not logged in)
  isAuthenticated: false,
  isLoading: false, // Indicates if user data is being fetched
  error: null, // Error message (null if no error)
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to sign the user up
    signup: (state, action) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
    },
    // Action to log the user in
    login: (state, action) => {
      state.expiry = Date.now() + EXPIRY_DURATION; // Set expiry timestamp
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    // Action to log the user out
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
      state.expiry = null;
    },
    // Action to start loading the user data
    startLoading: (state) => {
      state.isLoading = true;
    },
    // Action to set an error
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { signup, login, logout, startLoading, setError } =
  userSlice.actions;

export default userSlice.reducer;
