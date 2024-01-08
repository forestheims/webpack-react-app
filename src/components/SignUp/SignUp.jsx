import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../slices/userSlice.js';
import { Link, Navigate } from 'react-router-dom';

const SignUp = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleSignUp = () => {
    const userData = {
      name: 'Watson Aname',
      email: 'watson@name.com',
      username: 'watsonaname',
      password: 'lolol',
    };
    dispatch(login(userData)); // update this later
  };

  return (
    <>
      {user ? (
        <Navigate to={`/user/${user.username}`} replace />
      ) : (
        <>
          <h1>Sign Up</h1>
          <form>
            <label htmlFor="username">
              Username:
              <input type="text" name="username" />
            </label>
            <label htmlFor="password">
              Password:
              <input type="text" name="password" />
            </label>
            <button
              className="bg-gray-900 hover:bg-gray-600 rounded text-white py-2 px-4 font-bold"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </form>
          <p>
            Already have an account?&nbsp;
            <Link className="hover:underline font-bold" to="/">
              Sign in
            </Link>
          </p>
        </>
      )}
    </>
  );
};

export default SignUp;
