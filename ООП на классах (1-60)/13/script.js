"use strict";

class Employee {
  #name;
  #salary;
  #age;
  
  constructor(name, salary, age) {
    this.#name = name;
    this.#salary = salary;
    this.#age = age;
  }

  show() {
    return `${this.#name}, ${this.#salary}, ${this.#age}`;
  }
}

let employee = new Employee('Алексей', 50000, 30);
console.log(employee.show());