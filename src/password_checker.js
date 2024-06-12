const { strengthCheckerPatterns } = require("./helper_objects");
function passwordStrength(password) {
    if (password.length <= 8) {
      return "invalid";
    }
    let conditionsMet = 0;
    if (password.length !== 0) {
      conditionsMet++;
    }
    if (password.length > 8) {
      conditionsMet++;
    }
    if (strengthCheckerPatterns.lowerCaseCharacter.test(password)) {
      conditionsMet++;
    }
    if (strengthCheckerPatterns.upperCaseCharacter.test(password)) {
      conditionsMet++;
    }
  
  if (conditionsMet >= 6) {
    return "strong";
  } else if (conditionsMet >= 4) {
    return "medium";
  } else if (conditionsMet == 3) {
    return "weak";
  } else {
    return "invalid";
  }
}

console.log(passwordStrength(""));

module.exports = { passwordStrength };
