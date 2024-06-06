"use strict";
class Zate {
    constructor(год, месяц, день) {
        this.date = new Date(год, месяц - 1, день);
    }

    getYear() {
        return this.date.getFullYear();
    }

    getMonthNumber() {
        return this.date.getMonth() + 1;
    }

    getDayOfMonth() {
        return this.date.getDate();
    }

    getDayOfWeekNumber() {
        return this.date.getDay();
    }

    getDayOfWeekName() {
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return days[this.date.getDay()];
    }

    getMonthName() {
        const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        return months[this.date.getMonth()];
    }
}

let zate = new Zate(2024, 6, 6);
console.log(zate.getYear());
console.log(zate.getMonthNumber());
console.log(zate.getDayOfMonth());
console.log(zate.getDayOfWeekNumber());
console.log(zate.getDayOfWeekName());
console.log(zate.getMonthName());