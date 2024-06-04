"use strict";
class Validator {
    isEmail(str) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(str);
    }

    isDomain(str) {
        const domainRegex = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/;
        return domainRegex.test(str);
    }

    isNumber(str) {
        const numberRegex = /^\d+$/;
        return numberRegex.test(str);
    }
}

const validator = new Validator();
console.log(validator.isDomain('example.com'));

console.log(validator.isEmail('test@example.com'));
console.log(validator.isNumber('12345'));
