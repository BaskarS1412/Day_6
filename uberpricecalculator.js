class UberPriceCalculator {
  // write a class to calculate the Uber price.

  static basePrice = 2.0;
  static perMileRate = 1.5;
  static perMintRate = 0.5;

  constructor(driverName, carName, dispature, distination, distance, duration) {
    this.driverName = driverName;
    this.carName = carName;
    this.dispature = dispature;
    this.distination = distination;
    this.distance = distance;
    this.duration = duration;
  }
// Here getter, setter methods in given parameters.
  getDiverName() {
    return this.driverName;
  }

  setDriverName(val) {
    this.driverName = val;
  }

  getCarName() {
    return this.carName;
  }

  setCarName(val) {
    this.carName = val;
  }

  getDispature() {
    return this.dispature;
  }

  setDispature(val) {
    this.dispature = val;
  }

  getDistination() {
    return this.distination;
  }

  setDistination(val) {
    this.distination = val;
  }

  getDistance() {
    return this.distance;
  }

  setDistance(val) {
    this.distance = parseFloat(val);
  }

  getDuration() {
    return this.duration;
  }

  setDuration(val) {
    this.duration = parseFloat(val);
  }
// tempate using toString method.
  toString() {
    return (
      "Driver name : " +
      this.driverName +
      ", Car Name : " +
      this.carName +
      ", Staring point : " +
      this.dispature +
      ", End point : " +
      this.distination
    );
  }
// price calculation.
  getFinalPrice() {
    let travelDistance = parseFloat(
      this.distance * UberPriceCalculator.perMileRate
    );
    let travelTime = parseFloat(
      this.duration * UberPriceCalculator.perMintRate
    );
    let total = UberPriceCalculator.basePrice + travelDistance + travelTime;
    return parseFloat(total);
  }
}
// object creation and methods calling.
const uberPrice = new UberPriceCalculator(
  "BalaMurugan",
  "BMW",
  "Sulur",
  "GanthipuramBusStand",
  20,
  30
);

let travelPrice = uberPrice.getFinalPrice();
let generalInfo = uberPrice.toString();
// To print the output.
console.log(generalInfo + ", total price is Rs " + travelPrice);
