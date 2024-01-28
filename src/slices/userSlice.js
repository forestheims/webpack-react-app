import { createSlice } from '@reduxjs/toolkit';

const EXPIRY_DURATION = 86400000; // 24 hours in milliseconds

const initialState = {
  user: null, // The user object (null when not logged in)
  success: false,
  isAuthenticated: false,
  isLoading: false, // Indicates if user data is being fetched
  error: null, // Error message (null if no error)
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to sign the user up
    signupSuccess: (state, action) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
      state.success = true;
    },
    // Action for failure to sign the user up
    signupFailure: (state, action) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = action.payload;
    },
    // Action to log the user in
    loginSuccess: (state, action) => {
      state.expiry = Date.now() + EXPIRY_DURATION; // Set expiry timestamp
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    // Action to log the user in from authenticated session
    setUser: (state, action) => {
      state.expiry = Date.now() + EXPIRY_DURATION; // Set expiry timestamp
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    // Action for failure log the user in
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = action.payload;
    },
    // Action to log the user out
    logout: (state) => {
      state.user = null;
      state.success = true;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
      state.expiry = null;
    },
    // Action to log the user out
    logoutFailure: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = action.payload;
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

export const {
  signupSuccess,
  signupFailure,
  loginSuccess,
  loginFailure,
  logout,
  startLoading,
  setError,
  logoutFailure,
  setUser,
} = userSlice.actions;

export default userSlice.reducer;
