"use strict";
class ZateExt extends Zate {
    addYears(years) {
        this.date.setFullYear(this.date.getFullYear() + years);
    }

    subtractYears(years) {
        this.date.setFullYear(this.date.getFullYear() - years);
    }

    addMonths(months) {
        this.date.setMonth(this.date.getMonth() + months);
    }

    subtractMonths(months) {
        this.date.setMonth(this.date.getMonth() - months);
    }

    addDays(days) {
        this.date.setDate(this.date.getDate() + days);
    }

    subtractDays(days) {
        this.date.setDate(this.date.getDate() - days);
    }
}

let zateExt = new ZateExt(2024, 6, 6);
zateExt.addYears(1);
console.log(zateExt.getYear());
zateExt.subtractMonths(6);
console.log(zateExt.getMonthNumber());
zateExt.addDays(10);
console.log(zateExt.getDayOfMonth());
