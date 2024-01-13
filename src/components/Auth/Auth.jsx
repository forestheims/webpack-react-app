import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../slices/userSlice.js';
import { Link, Navigate, useLocation } from 'react-router-dom';

const Auth = () => {
  const location = useLocation();
  console.log(location);
  const loginPage = location.pathname === '/login';

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const formRef = useRef(null);

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());

    dispatch(login(userData));
  };

  return (
    <>
      {user ? (
        <Navigate to={`/user`} replace />
      ) : (
        <>
          <h1>{loginPage ? 'Log In' : 'Sign Up'}</h1>
          <form
            ref={formRef}
            onSubmit={handleSignUp}
            className="flex flex-col gap-4 align-start rounded px-4 py-6 bg-white bg-opacity-20"
          >
            <div className="flex gap-2">
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" />
            </div>
            <div className="flex justify-between gap-2">
              <label htmlFor="password">Password:</label>
              <input type="text" name="password" />
            </div>
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
