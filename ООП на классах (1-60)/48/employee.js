"use strict";
class Employee {
    constructor() {
        this._name = '';
    }

    get name() {
        console.log('get');
        return this._name;
    }

    set name(newName) {
        console.log('set');
        this._name = newName;
    }
}

const employee = new Employee();

employee.name = 'Александр';

console.log(employee.name);