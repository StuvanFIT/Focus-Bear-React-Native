
const isUserLoggedIn = require("../isUserLoggedIn")

describe("isUserLoggedIn()", () => {
  test("returns false if userId is null or undefined", () => {
    expect(isUserLoggedIn(null)).toBe(false);
    expect(isUserLoggedIn(undefined)).toBe(false);
  });

  test("returns false if userId is an empty string", () => {
    expect(isUserLoggedIn("")).toBe(false);
    expect(isUserLoggedIn("   ")).toBe(false);
  });

  test("returns true if userId is a valid non-empty string", () => {
    expect(isUserLoggedIn("abc123")).toBe(true);
  });
});