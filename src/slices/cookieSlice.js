import { createSlice } from '@reduxjs/toolkit';

// Initial state for the slice
const initialState = {
  cookiesAccepted: false,
  cookiesRejected: false,
};

// Creating the slice
export const cookieReducer = createSlice({
  name: 'cookie',
  initialState,
  reducers: {
    // Action to accept cookies
    acceptCookies: (state) => {
      state.cookiesAccepted = true;
      state.cookiesRejected = false;
    },
    // Optionally, an action to revoke consent
    revokeCookies: (state) => {
      state.cookiesAccepted = false;
      state.cookiesRejected = true;
    },
  },
});

// Exporting the actions
export const { acceptCookies, revokeCookies } = cookieReducer.actions;

// Exporting the reducer
export default cookieReducer.reducer;
