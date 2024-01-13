import { createSlice } from '@reduxjs/toolkit';
import { logIn, signOut, signUp } from '../services/subabase/auth/auth';

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
      const userData = action.payload;
      const { data, error } = signUp(userData);
      console.log('data:', data, '\n', 'error:', error);
      state.user = userData;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    // Action to log the user in
    login: (state, action) => {
      const userData = action.payload;
      const { data, error } = logIn(userData);
      console.log('data:', data, '\n', 'error:', error);
      state.user = userData;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    // Action to log the user out
    logout: (state) => {
      const { error } = signOut();
      console.log('error:', error);
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
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

export const { login, logout, startLoading, setError } = userSlice.actions;

export default userSlice.reducer;
