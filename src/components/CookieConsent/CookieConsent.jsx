import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { acceptCookies, revokeCookies } from '../../slices/cookieSlice';
import { Link, useLocation } from 'react-router-dom';

const CookieConsent = () => {
  const location = useLocation();
  const { cookiesAccepted, cookiesRejected } = useSelector(
    (state) => state.cookie
  );
  const dispatch = useDispatch();

  const handleAccept = () => {
    dispatch(acceptCookies());
  };

  const handleDecline = () => {
    dispatch(revokeCookies());
  };
  if (location.pathname !== '/cookies') {
    return cookiesAccepted || cookiesRejected ? (
      <div className="flex gap-1 items-center h-8">
        <Link className="hover:underline font-bold" to="/cookies">
          Cookie Settings
        </Link>
      </div>
    ) : (
      <div className="flex flex-col gap-4 items-center h-19 rounded bg-gray-900 bg-opacity-30 py-8 px-4 fixed bottom-6 right-6 text-white">
        <p>This website uses cookies.</p>
        <div>
          <button
            className="bg-gray-900 hover:bg-gray-600 rounded text-white py-2 px-4 font-bold mx-3"
            onClick={handleAccept}
          >
            Accept
          </button>
          <button
            className="bg-gray-900 hover:bg-gray-600 rounded text-white py-2 px-4 font-bold mx-3"
            onClick={handleDecline}
          >
            Decline
          </button>
        </div>
        <p>
          <Link className="hover:underline font-bold" to="/cookies">
            More Info
          </Link>
        </p>
      </div>
    );
  }
};

export default CookieConsent;
