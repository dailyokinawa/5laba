///на первое утверждение true, на 2 false (в 1 задании из двух)

"use strict";
class Student {
	constructor(name) {
		this.name = name;
	}
}
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let users = [
	new Student('user1'),
	new Employee('user2'),
	new Student('user3'),
	new Employee('user4'),
	new Student('user5'),
	new Employee('user6'),
	new Student('user7'),
];

for (let user of users) {
	if (user instanceof Employee) {
		console.log(user.name); // Выведет только имена работников
	}
}