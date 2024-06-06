"use strict";

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getSquare() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }

    getRatio() {
        return this.getSquare() / this.getPerimeter();
    }
}

let myRectangle = new Rectangle(10, 5);
console.log(myRectangle.getSquare());      
console.log(myRectangle.getPerimeter());   
console.log(myRectangle.getRatio());       