const Scooter = require("../src/Scooter");
const User = require("../src/User");

//typeof scooter === object
describe("scooter is object", () => {
  test("scooter class should create Scooter instance", () => {
    const scooter = new Scooter();
    expect(scooter).toBeInstanceOf(Scooter);
  });
});

describe("properties on scooter class", () => {
  test("should have the correct properties and corresponding data types on initialisation", () => {
    const testScooter = new Scooter();
    expect(testScooter).toHaveProperty("station");
    expect(typeof testScooter.serial).toBe("number");
    expect(testScooter.charge).toBe(100);
    expect(testScooter.isBroken).toBe(false);
  });
});

describe("serial and nextSerial increment successfully", () => {
  test("serial should be 2 when a second scooter is created", () => {
    const testScooter = new Scooter();
    const secondScooter = new Scooter();
    expect(secondScooter.serial).toBe(2);
  });

  test("should update nextSerial to 3 when a new scooter is created", () => {
    const testScooter = new Scooter();
    const secondScooter = new Scooter();
    expect(Scooter.nextSerial).toBe(3);
  });
});

describe("test methods", () => {
  test("should contain rent and dock methods with correct returns", () => {
    const testScooter = new Scooter();
    expect(testScooter.rent()).toBe("hi");
    expect(testScooter.dock()).toBe("hi");
  });
});

//Method tests
describe("scooter methods", () => {});
