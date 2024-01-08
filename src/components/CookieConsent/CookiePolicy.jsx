import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);

  return (
    <div>
      {user ? (
        <Link to={`/user/${user.username}`}>Home</Link>
      ) : (
        <Link to="/">Home</Link>
      )}
      <h1>Cookie Policy for This Website</h1>

      <h2>What Are Cookies</h2>
      <p>
        As is common practice with almost all professional websites, this site
        uses cookies, which are tiny files that are downloaded to your computer,
        to improve your &apos;experience. This page describes what information
        they gather, how we use it and why we sometimes need to store these
        cookies.
      </p>

      <h2>How We Use Cookies</h2>
      <p>
        We use cookies for a variety of reasons detailed below. Unfortunately,
        in most cases, there are no industry standard options for disabling
        cookies without completely disabling the functionality and features they
        add to this site.
      </p>

      <h2>Disabling Cookies</h2>
      <p>
        You can prevent the setting of cookies by adjusting the settings on your
        browser (see your browser&apos;s &apos;Help&apos; for how to do this).
        Be aware that disabling cookies will affect the functionality of this
        and many other websites that you visit. Disabling cookies will usually
        result in also disabling certain functionality and features of this
        site.
      </p>

      <h2>The Cookies We Set</h2>
      <ul>
        <li>Account related cookies</li>
        <li>Login related cookies</li>
      </ul>

      <h2>Third Party Cookies</h2>
      <p>We currently do not use third party cookies.</p>

      <h2>More Information</h2>
      <p>
        Hopefully, that has clarified things for you and as was previously
        mentioned, if there is something that you aren&apos;t sure whether you
        need or not, it&apos;s usually safer to leave cookies enabled in case it
        does interact with one of the features you use on our site.
      </p>
      <p>
        For more information on cookies, see the Wikipedia article on HTTP
        Cookies.
      </p>
    </div>
  );
};

export default CookiePolicy;