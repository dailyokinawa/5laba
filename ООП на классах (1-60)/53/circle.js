"use strict";

class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    getArea() {
        return Math.PI * this._radius * this._radius;
    }

    getCircumference() {
        return 2 * Math.PI * this._radius;
    }
}

let circle = new Circle(5);
console.log(circle.getArea());
console.log(circle.getCircumference());