"use strict";

class Student {
	name = 'john';
	surn = 'wick';
	
	show() {
		return this.name;
		return this.surn;
	}
}

let student = new Student;

console.log (student.name);
console.log (student.surn);