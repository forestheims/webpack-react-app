import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../slices/userSlice.js';
import CookieConsent from '../CookieConsent/CookieConsent.jsx';
import './Layout.css';

const Layout = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {isAuthenticated && (
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/todos">Todos</Link>
              </li>
              <li>
                <Link to="/barchart">Data</Link>
              </li>
            </ul>
          </nav>
          <button onClick={handleLogout}>Log out</button>
        </header>
      )}
      <main>{children}</main>
      <footer>
        <CookieConsent />
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
