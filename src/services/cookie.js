import Cookies from 'js-cookie';

// Set a cookie
const setCookie = (name, value, expires = 7, path = '') =>
  Cookies.set(name, value, { expires: expires, path: path });

// Get a cookie
const getCookie = (name) => Cookies.get(name);

// Remove a cookie
const removeCookie = (name) => Cookies.remove(name);

export { setCookie, getCookie, removeCookie };
