"use strict";

class Employee {
	#name;
	#salary;
	#age

	setName(name) {
		this.#name = name;
		return this;
	}
	setSalary(salary) {
		this.#salary = salary;
		return this;
	}
	setAge(age) {
		this.#age = age;
		return this;
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

let employee = new Employee;

employee.setName('john').setSalary('299292').setAge('18');

console.log(employee.getName());
console.log(employee.getSalary());
console.log(employee.getAge());