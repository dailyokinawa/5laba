"use strict";
class Month {
    constructor(monthNumber) {
        this.monthNumber = monthNumber;
        this.monthNames = [
            'Январь', 'Февраль', 'Март', 'Апрель',
            'Май', 'Июнь', 'Июль', 'Август',
            'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ];
    }

    getMonthNumber() {
        return this.monthNumber;
    }

    getMonthName() {
        return this.monthNames[this.monthNumber - 1];
    }

    getLastDayNumber() {
        const year = new Date().getFullYear();
        const date = new Date(year, this.monthNumber, 0);
        return date.getDate();
    }

    getFirstDayWeekday() {
        const year = new Date().getFullYear();
        const date = new Date(year, this.monthNumber - 1, 1);
        return date.getDay() === 0 ? 7 : date.getDay();
    }

    getLastDayWeekday() {
        const year = new Date().getFullYear();
        const date = new Date(year, this.monthNumber, 0);
        return date.getDay() === 0 ? 7 : date.getDay();
    }
}

let month = new Month(5);
console.log(month.getMonthNumber());
console.log(month.getMonthName());
console.log(month.getLastDayNumber());
console.log(month.getFirstDayWeekday());
console.log(month.getLastDayWeekday());