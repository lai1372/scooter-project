const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

const scooterApp = new ScooterApp();
// ScooterApp tests here
describe("contains correct properties and values", () => {
  test("should have property of stations with correct data on initialisation", () => {
    const testApp = new ScooterApp();
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
    expect(testApp.registeredUsers).toEqual({ usernames: {} });
  });
});

describe("methods return correct values", () => {
  test("registerUser should add username and password to list if over 18", () => {
    const testApp = new ScooterApp();
    const testRegister = testApp.registerUser("laila", "123pw", 27);
    expect(testApp.registeredUsers).toEqual({
      usernames: {
        laila: {
          password: "123pw",
        },
      },
    });
  });
  test("registerUser should throw error if under 18", () => {
    const testApp = new ScooterApp();
    expect(() => {
      testApp.registerUser("sam", "123pw", 17);
    }).toThrow("User is underage");
  });
});

describe.only("create scooter works", () => {
  test("should add scooter to stations when new one is created", () => {
    const newScooterApp = new ScooterApp();
    newScooterApp.createScooter("canton");
    expect(newScooterApp.stations).toEqual({
      canton: [
        {
          charge: 100,
          isBroken: false,
          serial: 1,
          station: "canton",
          user: null,
        },
      ],
      hampden: [],
      pigtown: [],
      remington: [],
      rolandPark: [],
      mountVernon: [],
    });
  });
});
