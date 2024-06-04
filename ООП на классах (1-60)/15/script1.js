"use strict";

class Employee {
#salary;
	constructor(salary) {
		this.#salary = salary;
	}
	
	show() {
		return this.#addSign(this.#salary);
	}

	#addSign(num) {
		return num + '$';
	}
}

let employee = new Employee('500000');

console.log(employee.show());