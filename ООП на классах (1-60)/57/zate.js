"use strict";
class Zate {
    constructor(���, �����, ����) {
        this.date = new Date(���, ����� - 1, ����);
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
        const days = ['�����������', '�����������', '�������', '�����', '�������', '�������', '�������'];
        return days[this.date.getDay()];
    }

    getMonthName() {
        const months = ['������', '�������', '����', '������', '���', '����',
            '����', '������', '��������', '�������', '������', '�������'];
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