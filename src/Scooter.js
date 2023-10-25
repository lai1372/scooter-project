class Scooter {
  // scooter code here
  static nextSerial = 0;
  constructor(station, user, serial, nextSerial, charge, isBroken) {
    this.station = station;
    this.user = user;
    this.serial = Scooter.nextSerial + 1;
    this.charge = 100;
    this.isBroken = false;
    Scooter.nextSerial ++;
  }

  rent(){
    if(this.isBroken === false && this.charge >= 20){

    }
  }

  dock(){
    return "hi"
  }
}

module.exports = Scooter;
