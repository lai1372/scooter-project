const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  // ScooterApp code here
  constructor(stations, registeredUsers) {
    this.stations = {
      canton: [],
      hampden: [],
      pigtown: [],
      remington: [],
      rolandPark: [],
      mountVernon: [],
    };
    this.registeredUsers = {
    };
  }

  registerUser(username, password, age) {
    if (age > 18){
      this.registeredUsers[username] = username
    } else {
      throw Error("User is underage")
    }
  }

  loginUser(username, password) {}

  logoutUser(username) {}

  createScooter(station) {}

  dockScooter(scooter, station) {}

  rentScooter(scooter, user) {}

  print() {}
}

module.exports = ScooterApp;
