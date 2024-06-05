"use strict";
class Employee {
	#name;
	
	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

let employee = new Employee('beck');

console.log(employee.getName);