const { passwordStrength } = require("./../src/password_checker");

describe("passwordStrength", function () {
  it("Returns invalid for empty passwords and passwords with less than 9 characers", function () {
    expect(passwordStrength("")).toEqual("Invalid");
    expect(passwordStrength("Numberz0")).toEqual("Invalid");
  });
});
