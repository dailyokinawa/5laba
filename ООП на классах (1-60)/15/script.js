"use strict";

class Employee {
	constructor(name, salary) {
		this._name = name;
		this._salary = salary;
	}
	
	getName() {
		return this._name;
	}
	getSalary() {
		return this._salary;
	}
}

let employee = new Employee('john', '13131313');

console.log(employee.getName());
console.log(employee.getSalary());