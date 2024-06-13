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
}

console.log(passwordStrength(""));

module.exports = { passwordStrength };
