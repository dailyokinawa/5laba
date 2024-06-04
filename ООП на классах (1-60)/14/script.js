"use strict";

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.#addSign(this.salary);
  }

  #addSign(num) {
    return num + ' ' + '$';
  }
}

let employee = new Employee('Алексей', 50000);
console.log(employee.getSalary());