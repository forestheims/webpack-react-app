import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { logout, logoutFailure } from '../../slices/userSlice.js';
import CookieConsent from '../CookieConsent/CookieConsent.jsx';
import { persistor } from '../../store.js';
import { signOut } from '../../services/subabase/auth/auth.js';

const Layout = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      const { error } = signOut(); // supabase call
      if (error) throw error;
      dispatch(logout());
      persistor.purge(); // Clears the persisted Redux state
    } catch (error) {
      dispatch(logoutFailure(error.message));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen p-4 text-center bg-lime-300 text-neutral-900 circular-gradient flex flex-col">
      <header className="flex row justify-between items-center">
        <nav>
          <ul className="flex row px-4 gap-4 font-bold">
            <li>
              <Link className="hover:invert" to="/">
                <img
                  src="/assets/cosmicaxelogo.svg"
                  alt="Cosmic Axe Logo"
                  width="80"
                  height="80"
                />
              </Link>
            </li>
            {isAuthenticated && (
              <>
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
              </>
            )}
          </ul>
        </nav>
        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="bg-gray-900 hover:bg-gray-600 rounded text-white py-2 px-4 font-bold"
          >
            Log out
          </button>
        )}
      </header>
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
