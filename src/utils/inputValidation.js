function validateEmail(email) {
  var re =
    // eslint-disable-next-line
    /^(([^<>()\]\\.,;:\s@\"]+(\.[^<>()\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePassword(password) {
  var minLength = 8;
  var hasUppercase = /[A-Z]/;
  var hasLowercase = /[a-z]/;
  var hasDigits = /\d/;
  var hasSpecialChar = /[!@#$%^&*]/;
  var errorMessages = [];

  if (password.length < minLength) {
    console.log(password.length);
    errorMessages.push(
      'Password should be at least ' + minLength + ' characters long.'
    );
  }
  if (!hasUppercase.test(password)) {
    errorMessages.push(
      'Password should include at least one uppercase letter.'
    );
  }
  if (!hasLowercase.test(password)) {
    errorMessages.push(
      'Password should include at least one lowercase letter.'
    );
  }
  if (!hasDigits.test(password)) {
    errorMessages.push('Password should include at least one digit.');
  }
  if (!hasSpecialChar.test(password)) {
    errorMessages.push(
      'Password should include at least one special character (e.g., !@#$%^&*).'
    );
  }

  var isValid = errorMessages.length === 0;
  return [isValid, errorMessages];
}

export { validateEmail, validatePassword };
