"use strict";

class Student {
  constructor(name, surn) {
    this.name = name;
    this.surn = surn;
  }

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getInitials() {
    return `${Student.capitalize(this.name)[0]}.${Student.capitalize(this.surn)[0]}.`;
  }
}

const student = new Student('никита', 'иванов');
console.log(student.getInitials());