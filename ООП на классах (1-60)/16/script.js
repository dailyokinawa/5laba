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
	
	getName() {
		return this.#name;
	}
	
	getSalary() {
		return this.#salary;
	}
	getAge() {
		return this.#age;
	}
}

let employee = new Employee('john', '50000', '29');

console.log(employee.getName());
console.log(employee.getSalary());
console.log(employee.getAge());