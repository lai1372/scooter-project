const Scooter = require("../src/Scooter");
const User = require("../src/User");

describe("scooter is object", () => {
  test("scooter class should create Scooter instance", () => {
    const scooter = new Scooter();
    expect(scooter).toBeInstanceOf(Scooter);
  });
});

describe("properties on scooter class", () => {
  test("should have the correct properties and corresponding data types on initialisation", () => {
    const testScooter = new Scooter();
    expect(typeof testScooter.station).toBe("string");
    expect(typeof testScooter.serial).toBe("number");
    expect(testScooter.charge).toBe(100);
    expect(testScooter.isBroken).toBe(false);
  });
});

describe("scooter serials", () => {
  test("are unique", () => {
    const testScooter1 = new Scooter();
    const testScooter2 = new Scooter();
    expect(testScooter1.serial).not.toBe(testScooter2.serial);
  });
});
