const User = require("../src/User");

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    expect(user.username).toBe("Joe Bloggs");
  });
  // test password
  test("password should be a string", () => {
    expect(user.getPassword()).toBe("test123");
  });
  // test age
});

// test login

// test logout
