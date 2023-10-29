// const ScooterApp = require("./ScooterApp");

class Scooter {
  // scooter code here
  static nextSerial = 1;
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial;
    this.charge = 100;
    this.isBroken = false;
    Scooter.nextSerial++;
  }

  rent(user) {
    if (this.isBroken === false && this.charge >= 20) {
      this.user = user;
      ScooterApp.rentScooter(this.Scooter, user);
    } else if (this.isBroken === true) {
      throw Error("Needs repair");
    } else {
      throw Error("Needs charging");
    }
  }

  dock(station) {
    ScooterApp.dockScooter(this.Scooter, station);
  }
}

module.exports = Scooter;
