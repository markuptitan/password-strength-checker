function passwordStrength(password) {
  if (password.length <= 8) {
    return "invalid";
  }
  let conditionsMet = 2;
  const patterns = [
    /[a-z]/,
    /[A-Z]/,
    /\d/,
    /[^a-zA-Z0-9]/,
    /\s/,
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

module.exports = { passwordStrength };
  
