const { passwordStrength } = require("./../src/password_checker");

describe("passwordStrength", function () {
  it("Returns invalid for empty passwords and passwords with less than 9 characers", function () {
    expect(passwordStrength("")).toEqual("invalid");
    expect(passwordStrength("Numberz0")).toEqual("invalid");
  });
  it("Returns weak for passwords meeting exactly 3 conditions", function () {
    expect(passwordStrength("samsonlukhele")).toEqual("weak");
    expect(passwordStrength("siyabonga")).toEqual("weak");
  });
  it("Returns medium for passwords meeting 4 - 5 conditions", function () {
    expect(passwordStrength("SamsonManOfPeace32")).toEqual("medium");
    expect(passwordStrength("SiyabongaLukhele32")).toEqual("medium");
  });
  it("Returns strong for passwords meeting 6 or more conditions", function () {
    expect(passwordStrength("SamsonManOfPeace32.")).toEqual("strong");
    expect(passwordStrength("Siyabonga Lukhele32!")).toEqual("strong");
  });

});
