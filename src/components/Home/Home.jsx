import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../slices/userSlice.js';
import { Link, Navigate } from 'react-router-dom';

const Home = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userData = {
      name: 'Watson Aname',
      email: 'watson@name.com',
      username: 'watsonaname',
    };
    dispatch(login(userData));
  };

  return (
    <>
      {user ? (
        <Navigate to={`/user/${user.username}`} replace />
      ) : (
        <>
          <h1>Log In</h1>
          <button
            className="bg-gray-900 hover:bg-gray-600 rounded text-white py-2 px-4 font-bold"
            onClick={handleLogin}
          >
            Log in with email
          </button>
          <p>
            No account yet?&nbsp;
            <Link className="hover:underline font-bold" to="/signup">
              Sign up
            </Link>
          </p>
        </>
      )}
    </>
  );
};

export default Home;
