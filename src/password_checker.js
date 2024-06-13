const { strengthCheckerPatterns } = require("./helper_objects");
function passwordStrength(password) {
  if (password.length <= 8) {
    return "invalid";
  }
}

console.log(passwordStrength(""));

module.exports = { passwordStrength };
