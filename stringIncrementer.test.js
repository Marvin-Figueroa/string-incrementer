const { stringIncrementer, getDigitsPortion } = require("./stringIncrementer");

describe("String Incrementer", () => {
  test('should return "1" when receives an empty string', () => {
    expect(stringIncrementer("")).toEqual("1");
  });

  test('should append "1" when receives a string that does not end in a number', () => {
    expect(stringIncrementer("foo")).toBe("foo1");
  });

  test("should add 1 to the number at the end when receives a string that ends in a number", () => {
    expect(stringIncrementer("word99")).toBe("word100");
  });

  test("should consider the final amount of digits when there are leading zeros", () => {
    expect(stringIncrementer("foobar000")).toBe("foobar001");
  });
});
