"use strict";

class Employee {
	show(name, salary) {
		return name + ' ' + salary;
	}
}

let employee = new Employee;

console.log(employee.show('john', '34000')); // выведет '+++'