// Import necessary functions from Redux Toolkit
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUser } from '../slices/userSlice';
import supabase from '../services/subabase/client';

// Define an async Thunk for initializing the app
const initializeApp = createAsyncThunk(
  'auth/initializeApp',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const session = supabase.auth.session(); // Get the current session

      if (!session) {
        // No session found, you might want to handle this case, e.g., redirect to login
        return rejectWithValue('No session found');
      }

      const user = session.user;

      if (!user) {
        // No user data found in session, handle accordingly
        return rejectWithValue('User not found in session');
      }

      // Optionally, you can fetch additional user data from your own user profiles table if you have one
      // const { data: userData, error } = await supabase
      //   .from('profiles')
      //   .select('*')
      //   .eq('id', user.id)
      //   .single();

      // if (error) {
      //   throw error;
      // }

      // Dispatch an action to set the user data in your store
      dispatch(setUser(user));

      // Return the user data as the fulfilled action payload
      return user;
    } catch (error) {
      // Handle any errors, possibly by dispatching an error action or rejecting with a value
      return rejectWithValue(error.message);
    }
  }
);

export { initializeApp };
