import React from 'react';
import { useSelector } from 'react-redux';

import { Link, Navigate } from 'react-router-dom';

const Home = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      {user ? (
        <Navigate to={`/user/${user.username}`} replace />
      ) : (
        <>
          <h1>Log In</h1>
          <Link
            className="bg-gray-900 hover:bg-gray-600 rounded text-white py-2 px-4 font-bold"
            to="/login"
          >
            Log in with email
          </Link>
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
