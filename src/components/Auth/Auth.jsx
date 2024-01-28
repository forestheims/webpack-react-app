import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loginSuccess,
  loginFailure,
  signupSuccess,
  signupFailure,
  startLoading,
} from '../../slices/userSlice.js';
import { logIn, signUp } from '../../services/subabase/auth/auth.js';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import {
  validateEmail,
  validatePassword,
} from '../../utils/inputValidation.js';

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loginPage = location.pathname === '/login';

  const [emailValidMessage, setEmailValidMessage] = useState('');
  const [emailPasswordMessage, setPasswordValidMessage] = useState([]);

  const { success, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    const { email, password } = userData;
    const validEmail = validateEmail(email);
    const validPassword = validatePassword(password);

    if (!validEmail) {
      setEmailValidMessage('A valid email address is required');
    }
    if (!validPassword[0]) {
      setPasswordValidMessage(validPassword[1]);
    }
    if (loginPage & validEmail & validPassword[0]) {
      try {
        dispatch(startLoading());
        const { email, password } = userData;
        const { data, error } = logIn(email, password); // supabase cal
        if (error) throw error;
        console.log('Log User In');
        dispatch(loginSuccess(data.user));
      } catch (error) {
        dispatch(loginFailure(userData));
      }
    } else if (validEmail & validPassword[0]) {
      try {
        dispatch(startLoading());
        const { data, error } = signUp(email, password); // supabase call
        if (error) throw error;
        console.log('Sign User Up');
        dispatch(signupSuccess(data.user));
      } catch (error) {
        dispatch(signupFailure(error.message));
      }
    }
  };

  useEffect(() => {
    if (success) {
      navigate('/login');
    }
  }, [success, navigate]);

  return (
    <>
      {user ? (
        <Navigate to={`/user`} replace />
      ) : (
        <>
          <h1>{loginPage ? 'Log In' : 'Sign Up'}</h1>
          {user?.successMessage && (
            <p className="text-green-600 text-sm text-left w-1/2 justify-self-center">
              {user.successMessage}
            </p>
          )}
          <form
            onSubmit={handleSignUp}
            className="flex flex-col gap-4 align-start rounded px-4 py-6 bg-white bg-opacity-20"
          >
            <div className="flex justify-between gap-2">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" required />
            </div>
            <p className="text-red-600 text-sm text-left w-1/2 justify-self-end">
              {emailValidMessage}
            </p>
            <div className="flex justify-between gap-2">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                required
                min="8"
                max="68"
              />
            </div>
            <ul className="text-red-600 text-sm text-left w-1/2 justify-self-end">
              {emailPasswordMessage.map((message, index) => (
                <li key={index}>- {message}</li>
              ))}
            </ul>
            <button
              className="bg-gray-900 hover:bg-gray-600 rounded text-white py-2 px-4 font-bold"
              type="submit"
            >
              {loginPage ? 'Log In' : 'Sign Up'}
            </button>
          </form>
          {loginPage ? (
            <p>
              Don&apos;t have an account?&nbsp;
              <Link className="hover:underline font-bold" to="/signup">
                Sign Up
              </Link>
            </p>
          ) : (
            <p>
              Already have an account?&nbsp;
              <Link className="hover:underline font-bold" to="/login">
                Log in
              </Link>
            </p>
          )}
        </>
      )}
    </>
  );
};

export default Auth;
