class Person {
  // Write a “person” class to hold all the details.
  constructor(
    firstName,
    lastName,
    age,
    dateOfBirth,
    qualification,
    work,
    addres
  ) {
    this.firstNamename = firstName;
    this.lastName = lastName;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.qualification = qualification;
    this.work = work;
    this.addres = addres;
  }
}

const personObj = new Person(
  "Vijay",
  "Baskar",
  27,
  "14-12-1996",
  "BE-Machanical Engineering",
  "Software Developer",
  "Kallakurichi"
);

console.log(
  "My name is " +
    personObj.firstNamename +
    " " +
    personObj.lastName +
    ". I completed my " +
    personObj.qualification +
    " in 2018"
);
console.log(
  "I born at " +
    personObj.dateOfBirth +
    " in " +
    personObj.addres +
    " now my age is " +
    personObj.age
);
