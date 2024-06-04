"use strict";

class Employee {
  #name;
  #salary;
  #age;

  constructor(name, salary) {
    this.#name = name;
    this.#salary = salary;
    this.#age = 0;
  }

  setAge(age) {
    if (age >= 0 && age <= 120) {
      this.#age = age;
    } else {
      throw new Error('Возраст должен быть в диапазоне от 0 до 120 лет');
    }
  }

  getSalary() {
    return `${this.#salary}$`;
  }

  show() {
    return `${this.#name}, ${this.getSalary()}, ${this.#age}`;
  }
}

let employee = new Employee('Алексей', 50000);
employee.setAge(30); 'Правильное значение'
console.log(employee.show()); 

employee.setAge(150); 'Неправильное значение