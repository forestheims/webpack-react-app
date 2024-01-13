import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <h1>Hello, {user.username}</h1>
    </>
  );
};

export default User;
