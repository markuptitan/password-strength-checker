const { strengthCheckerPatterns } = require("./helper_objects");
function passwordStrength(password) {
  if (password.length <= 8) {
    return "invalid";
  }
  let conditionsMet = 0;
  const patterns = [
    strengthCheckerPatterns.lowerCaseCharacter,
    strengthCheckerPatterns.upperCaseCharacter,
    strengthCheckerPatterns.digitCharacter,
    strengthCheckerPatterns.specialCaseCharacter,
    strengthCheckerPatterns.whitespaceCharacter,
  ];
  for (const pattern of patterns) {
    if (pattern.test(password)) {
      conditionsMet++;
    }
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
