import { createSlice } from '@reduxjs/toolkit';

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
    // Action to log the user in
    signup: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    // Action to log the user in
    login: (state, action) => {
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
