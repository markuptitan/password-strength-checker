const { passwordStrength } = require("./../src/password_checker");

describe("passwordStrength():", function () {
  it("returns invalid for empty passwords and passwords with less than 9 characers", function () {
    expect(passwordStrength("")).toBe("invalid");
    expect(passwordStrength("Numberz0")).toBe("invalid");
  });
  it("returns weak for passwords meeting exactly 3 conditions", function () {
    expect(passwordStrength("samsonlukhele")).toBe("weak");
    expect(passwordStrength("siyabonga")).toBe("weak");
  });
  it("returns medium for passwords meeting 4 - 5 conditions", function () {
    expect(passwordStrength("SamsonManOfPeace32")).toBe("medium");
    expect(passwordStrength("SiyabongaLukhele32")).toBe("medium");
  });
  it("returns strong for passwords meeting 6 or more conditions", function () {
    expect(passwordStrength("SamsonManOfPeace32.")).toBe("strong");
    expect(passwordStrength("Siyabonga Lukhele32!")).toBe("strong");
  });
  it("should return 'weak' for an input of space characters that satisfy the required password length", function () {
    expect(passwordStrength("           ")).toBe("weak");
  });
});
