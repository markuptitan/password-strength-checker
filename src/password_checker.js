function passwordStrength(password) {
  if (!password || password.length <= 8) {
    return "invalid";
  }
  let conditionsMet = 2;
  const conditions = [/[a-z]/, /[A-Z]/, /\d/, /[!@#$%^&*(),.?":{}|<>]/, /\s/];

  for (let condition of conditions) {
    if (condition.test(password)) {
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
