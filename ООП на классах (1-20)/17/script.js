"use strict";

class Employee {
	#name;
	#surn;
	
	setName(name) {
		this.#name = name;
	}
	setSurn(surn) {
		this.#surn = surn;
	}
	
	getName() {
		return this.#name;
	}
	getSurn() {
		return this.#surn;
	}
}

let employee = new Employee;

employee.setName('john');
employee.setSurn('smit');

console.log(employee.getName());
console.log(employee.getSurn());