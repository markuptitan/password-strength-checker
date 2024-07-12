const strengthMessages = {
  isWeak: "weak",
  isMedium: "medium",
  isStrong: "strong",
  isInvalid: "invalid",
};

function passwordStrength(password) {
  if (!password || password.length <= 8) {
    return strengthMessages.isInvalid;
  }
  let conditionsMet = 2;
  const conditions = [/[a-z]/, /[A-Z]/, /\d/, /[!@#$%^&*(),.?":{}|<>]/, /\s/];

  for (let condition of conditions) {
    if (condition.test(password)) {
      conditionsMet++;
    }
  }
  if (conditionsMet >= 6) {
    return strengthMessages.isStrong;
  } else if (conditionsMet >= 4) {
    return strengthMessages.isMedium;
  } else if (conditionsMet === 3) {
    return strengthMessages.isWeak;
  } else {
    return strengthMessages.isInvalid;
  }
}

function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  const result = passwordStrength(password);
  const resultDiv = document.getElementById("result");

  if (result === strengthMessages.isStrong) {
    resultDiv.style.color = "green";
  } else if (result === strengthMessages.isMedium) {
    resultDiv.style.color = "orange";
  } else if (result === strengthMessages.isWeak) {
    resultDiv.style.color = "red";
  } else {
    resultDiv.style.color = "black";
  }

  resultDiv.textContent = `Password strength is ${result}`;
}
