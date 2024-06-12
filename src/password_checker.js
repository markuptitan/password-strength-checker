function passwordStrength(password) {
    if (password.length <= 8) {
        return "Invalid"
    }
  return;
}

module.exports = { passwordStrength };