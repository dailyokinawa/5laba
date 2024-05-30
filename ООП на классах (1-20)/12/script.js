"use strict";

class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	
	show() {
		return this.name + ' ' + this.salary * 1.1;
	}
}

let employee = new Employee('john', '70000');

console.log(employee.show());