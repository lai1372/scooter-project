const Scooter = require("../src/Scooter");
const User = require("../src/User");

//typeof scooter === object
describe("Scooter is object", () => {
  test("Scooter class should create Scooter instance", () => {
    const scooter = new Scooter();
    expect(scooter).toBeInstanceOf(Scooter);
  });
});

describe("All properties exist", () => {
  test("should have the correct properties and corresponding data types on initialisation", () => {
    const testScooter = new Scooter();
    expect(testScooter).toHaveProperty("station");
    expect(typeof testScooter.serial).toBe("number");
    expect(typeof testScooter.nextSerial).toBe("number");
    expect(testScooter.charge).toBe(100);
    expect(testScooter.isBroken).toBe(false);
  });
});

describe("Name of the group", () => {});

//Method tests
describe("scooter methods", () => {});
