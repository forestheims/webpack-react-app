import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../slices/userSlice.js';

const UserProfile = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userData = { name: 'Watson Aname', email: 'watson@name.com' };
    dispatch(login(userData));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default UserProfile;
