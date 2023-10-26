const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

const scooterApp = new ScooterApp();
// ScooterApp tests here
describe("contains correct properties and values", () => {
  test("should have property of stations with correct data on initialisation", () => {
    const testApp = new ScooterApp();
    console.log(testApp.stations);
    expect(testApp.stations).toEqual({
      canton: [],
      hampden: [],
      pigtown: [],
      remington: [],
      rolandPark: [],
      mountVernon: [],
    });
  });
  test("should have property registered users initialised to empty object", () => {
    const testApp = new ScooterApp();
    console.log(testApp.registeredUsers);
    expect(testApp.registeredUsers).toEqual({});
  });
});

describe("test for methods", () => {
  test("should have all methods on initialisation", () => {});
});
