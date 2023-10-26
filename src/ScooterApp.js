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
      usernames: {},
    };
  }

  registerUser(username, password, age) {
    if (age > 18) {
      this.registeredUsers.usernames[username];
      this.registeredUsers.usernames[username] = {};
      this.registeredUsers.usernames[username].password = password;
    } else {
      throw Error("User is underage");
    }
  }

  loginUser(username, password) {
    if (
      !this.registeredUsers.usernames[username] ||
      !this.registeredUsers.usernames[username] === password
    ) {
      throw Error("username or password is incorrect");
    } else {
      const newUser = new User(username, password);
      newUser.login(password);
    }
  }

  logoutUser(username) {}

  createScooter(station) {
    if (this.stations[station]) {
      const newScooter = new Scooter(station);
      this.stations[station] = newScooter;
      console.log("created a new scooter");
      return newScooter;
    } else {
      throw Error("no such station");
    }
  }

  dockScooter(scooter, station) {
    this.stations[station] = scooter;
  }

  rentScooter(scooter, user) {}

  print() {}
}

module.exports = ScooterApp;
