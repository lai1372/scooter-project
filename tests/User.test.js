const User = require("../src/User");

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    const user = new User("Joe Bloggs", "test123", 21);

    expect(typeof user.username).toBe("string");
    expect(user.username).toBe("Joe Bloggs");
  });
  // test password
  test("password should be a string", () => {
    const user = new User("Joe Bloggs", "test123", 21);
    expect(typeof user.getPassword()).toBe("string");
    expect(user.getPassword()).toBe("test123");
  });
  // test age
});

// test login

// test logout
