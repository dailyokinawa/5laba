"use strict";

class Period {
  constructor(startTime, endTime) {
    this.startTime = new Date(startTime);
    this.endTime = new Date(endTime);
  }

  getDifferenceInSeconds() {
    return Math.abs((this.endTime - this.startTime) / 1000);
  }

  getDifferenceInMinutes() {
    return Math.abs((this.endTime - this.startTime) / 1000 / 60);
  }

  getDifferenceInHours() {
    return Math.abs((this.endTime - this.startTime) / 1000 / 60 / 60);
  }

  getDifferenceInDays() {
    return Math.abs((this.endTime - this.startTime) / 1000 / 60 / 60 / 24);
  }
}

const period = new Period('2024-06-01T00:00:00Z', '2024-06-06T07:25:36Z');
console.log(period.getDifferenceInSeconds());
console.log(period.getDifferenceInMinutes()); 
console.log(period.getDifferenceInHours());  
console.log(period.getDifferenceInDays());  