const { passwordStrength } = require("./../src/password_checker");

describe("passwordStrength", function () {
  it("Returns invalid for empty passwords and passwords with less than 9 characers", function () {
    expect(passwordStrength("")).toEqual("invalid");
    expect(passwordStrength("Numberz0")).toEqual("invalid");
  });
  it("Returns weak for passwords meeting exactly 3 conditions", function () {
    expect(passwordStrength("samson007")).toEqual("weak");
    expect(passwordStrength("siyabonga664")).toEqual("weak");
  });
  it("Returns weak for passwords meeting 4 - 5 conditions", function () {
    expect(passwordStrength("Samson007")).toEqual("medium");
    expect(passwordStrength("Siyabonga664")).toEqual("medium");
  });
});
