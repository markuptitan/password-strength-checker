const {
  passwordStrength,
  strengthMessages,
} = require("./../src/password_checker");

describe("passwordStrength():", function () {
  it("returns invalid for empty passwords and passwords with less than 9 characers", function () {
    expect(passwordStrength("Numberz0")).toBe(strengthMessages.invalid);
  });
  it("returns weak for passwords meeting exactly 3 conditions", function () {
    expect(passwordStrength("samsonlukhele")).toBe("weak");
    expect(passwordStrength("siyabonga")).toBe(strengthMessages.isWeak);
  });
  it("returns medium for passwords meeting 4 - 5 conditions", function () {
    expect(passwordStrength("SamsonManOfPeace32")).toBe(
      strengthMessages.isMedium
    );
  });
  it("returns strong for passwords meeting 6 or more conditions", function () {
    expect(passwordStrength("Siyabonga Lukhele32!")).toBe(
      strengthMessages.isStrong
    );
  });
  it("should return 'weak' for an input of space characters that satisfy the required password length", function () {
    expect(passwordStrength("           ")).toBe("weak");
  });
});
