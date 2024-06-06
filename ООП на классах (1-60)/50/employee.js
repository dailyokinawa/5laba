"use strict";

class Employee {
	#name;

	set name(name) {
		if (name.length > 0) {
			this.#name = name;
		} else {
			throw new Error('name is incorrect');
		}
	}
	get name() {
		return this.#name;
	}
}

let employee = new Employee;

employee.name = '';