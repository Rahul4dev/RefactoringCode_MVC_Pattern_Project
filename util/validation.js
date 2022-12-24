function postIsValid(title, content) {
  return title && content && title.trim() !== "" && content.trim() !== "";
}

function accountIsValid(email, confirmEmail, password) {
  return (
    email &&
    confirmEmail &&
    password &&
    password.trim().length >= 6 &&
    email === confirmEmail &&
    email.includes("@")
  );
}

module.exports = {
  postIsValid: postIsValid,
  accountIsValid: accountIsValid,
};
