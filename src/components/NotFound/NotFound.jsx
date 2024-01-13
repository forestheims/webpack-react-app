import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <p>If you think this is a mistake, please contact support.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
