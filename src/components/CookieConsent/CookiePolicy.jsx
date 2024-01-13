import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { acceptCookies, revokeCookies } from '../../slices/cookieSlice';

const CookiePolicy = () => {
  const [resetCookies, setResetCookies] = useState(false);

  const { cookiesAccepted, cookiesRejected } = useSelector(
    (state) => state.cookie
  );

  useEffect(() => {
    setResetCookies(cookiesAccepted);
  }, []);

  const dispatch = useDispatch();

  const handleAccept = () => {
    setResetCookies(true);
    dispatch(acceptCookies());
  };

  const handleDecline = () => {
    setResetCookies(true);
    dispatch(revokeCookies());
  };

  return (
    <>
      <nav className="flex row px-4 gap-4 font-bold">
        <Link className="hover:underline font-bold" to="/">
          Home
        </Link>
      </nav>
      {resetCookies ? (
        <div className="flex gap-1 items-center h-8">
          <button
            className="hover:underline font-bold rounded bg-gray-600 bg-opacity-50 px-2 py-1"
            onClick={() => setResetCookies(!resetCookies)}
          >
            Change Cookie Settings
          </button>
        </div>
      ) : (
        <div className="flex gap-4 items-center h-19 rounded bg-gray-900 bg-opacity-30 py-4 px-4 text-white">
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
        </div>
      )}
      <div className="flex flex-col text-left gap-2 m-4 w-7/12">
        <h1 className="font-bold">Cookie Policy for This Website</h1>

        <h2>What Are Cookies</h2>
        <p>
          As is common practice with almost all professional websites, this site
          uses cookies, which are tiny files that are downloaded to your
          computer, to improve your &apos;experience. This page describes what
          information they gather, how we use it and why we sometimes need to
          store these cookies.
        </p>

        <h2 className="font-bold">How We Use Cookies</h2>
        <p>
          We use cookies for a variety of reasons detailed below. Unfortunately,
          in most cases, there are no industry standard options for disabling
          cookies without completely disabling the functionality and features
          they add to this site.
        </p>

        <h2 className="font-bold">Disabling Cookies</h2>
        <p>
          You can prevent the setting of cookies by adjusting the settings on
          your browser (see your browser&apos;s &apos;Help&apos; for how to do
          this). Be aware that disabling cookies will affect the functionality
          of this and many other websites that you visit. Disabling cookies will
          usually result in also disabling certain functionality and features of
          this site.
        </p>

        <h2 className="font-bold">The Cookies We Set</h2>
        <ul>
          <li>Account related cookies</li>
          <li>Login related cookies</li>
        </ul>

        <h2 className="font-bold">Third Party Cookies</h2>
        <p>We currently do not use third party cookies.</p>

        <h2 className="font-bold">More Information</h2>
        <p>
          Hopefully, that has clarified things for you and as was previously
          mentioned, if there is something that you aren&apos;t sure whether you
          need or not, it&apos;s usually safer to leave cookies enabled in case
          it does interact with one of the features you use on our site.
        </p>
        <p>
          For more information on cookies, see the Wikipedia article on HTTP
          Cookies.
        </p>
      </div>
    </>
  );
};

export default CookiePolicy;
