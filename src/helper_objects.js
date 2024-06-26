const strengthCheckerPatterns = {
  lowerCaseCharacter: /[a-z]/,
  upperCaseCharacter: /[A-Z]/,
  digitCharacter: /\d/,
  specialCaseCharacter: /[^a-zA-Z0-9]/,
  whitespaceCharacter: /\s/,
};

module.exports = { strengthCheckerPatterns };
