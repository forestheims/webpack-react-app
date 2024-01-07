import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <>
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
            <Link to="/user">User Profile</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/barchart">Data</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer></footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
