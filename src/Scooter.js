class Scooter {
  // scooter code here
  constructor(station, user, serial, nextSerial, charge, isBroken) {
    this.station = station;
    this.user = user;
    this.serial = 0;
    this.nextSerial = 1;
    this.charge = 100;
    this.isBroken = false;
  }
}

module.exports = Scooter;
