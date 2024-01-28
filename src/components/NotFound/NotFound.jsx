import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <p>If you think this is a mistake, please contact support.</p>
      <Link to="/" className="rounded bg-gray-200 px-2 py-1 m-4">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
