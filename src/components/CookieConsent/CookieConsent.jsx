import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { acceptCookies, revokeCookies } from '../../slices/cookieSlice';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
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

  return cookiesAccepted || cookiesRejected ? (
    <div>
      <Link to="/cookies">Cookie Settings</Link>
    </div>
  ) : (
    <div>
      <p>This website uses cookies.</p>
      <button onClick={handleAccept}>Accept</button>
      <button onClick={handleDecline}>Decline</button>
      <p>
        <Link to="/cookies">More Info</Link>
      </p>
    </div>
  );
};

export default CookieConsent;
