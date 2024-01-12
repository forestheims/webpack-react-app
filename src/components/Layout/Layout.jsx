import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../slices/userSlice.js';
import CookieConsent from '../CookieConsent/CookieConsent.jsx';

const Layout = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="min-h-screen p-4 text-center bg-lime-300 text-neutral-900 circular-gradient flex flex-col">
      {isAuthenticated && (
        <header className="flex row justify-between items-center">
          <nav>
            <ul className="flex row px-4 gap-4 font-bold">
              <li>
                <Link className="hover:underline" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/user">
                  User
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/todos">
                  Todos
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/barchart">
                  Data
                </Link>
              </li>
            </ul>
          </nav>
          <button
            onClick={handleLogout}
            className="bg-gray-900 hover:bg-gray-600 rounded text-white py-2 px-4 font-bold"
          >
            Log out
          </button>
        </header>
      )}
      <main className="flex flex-col flex-grow items-center justify-center gap-8">
        {children}
      </main>
      <footer className="m-bottom-6">
        <nav className="">
          <ul className="flex row px-4 gap-4 items-center justify-center">
            <li>
              <Link className="hover:underline" to="/privacypolicy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/termsofservice">
                Terms of Service
              </Link>
            </li>
            <li>
              <CookieConsent />
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
