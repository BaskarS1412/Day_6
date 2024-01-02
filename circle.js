class Circle {
  rediusDouble = 1.0;
  colourString = "red";

  Circle() {}

  Circle(rediusDouble) {
    this.rediusDouble = parseFloat(rediusDouble);
  }

  Circle(rediusDouble, colourString) {
    this.rediusDouble = parseFloat(rediusDouble);
    this.colourString = colourString;
  }

  getRedius() {
    return parseFloat(this.rediusDouble);
  }

  setRedius(val) {
    this.rediusDouble = parseFloat(val);
  }

  getColour() {
    return this.colourString;
  }

  setColour(val) {
    this.colourString = val;
  }

  toString() {
    return (
      "Circle [redius = " +
      this.rediusDouble +
      ", colour = " +
      this.colourString +
      "]"
    );
  }

  getArea() {
    let area = Math.PI * (this.rediusDouble * this.rediusDouble);
    return parseFloat(area);
  }

  getCircumference() {
    let circumference = 2 * Math.PI * this.rediusDouble;
    return parseFloat(circumference);
  }
}
// Object creation. and call the methods.
const circleObj = new Circle(1.0, "red");

let areaOtheCircle = circleObj.getArea();
let cirOfCircle = circleObj.getCircumference();
let colour = circleObj.getColour();

console.log("The area of the circle is " + areaOtheCircle);
console.log("The circumference of the circle is " + cirOfCircle);
console.log(circleObj.toString());
console.log("The given colour is " + colour);

// Using getter, setter and change the values.
circleObj.setRedius(4.0);
circleObj.setColour("blue");
areaOtheCircle = circleObj.getArea();
cirOfCircle = circleObj.getCircumference();
colour = circleObj.getColour();

console.log("The area of the circle is " + areaOtheCircle);
console.log("The circumference of the circle is " + cirOfCircle);
console.log(circleObj.toString());
console.log("The given colour is " + colour);
