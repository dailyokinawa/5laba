class Validator {
  isEmail(str) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(str);
  }

  isDomain(str) {
    const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return domainRegex.test(str);
  }

  isNumber(str) {
    const numberRegex = /^[0-9]+$/;
    return numberRegex.test(str);
  }
}

let validator = new Validator();

console.log(validator.isEmail("example@example.com")); // Вернет true
console.log(validator.isEmail("example.com")); // Вернет false

console.log(validator.isDomain("example.com")); // Вернет true
console.log(validator.isDomain("example")); // Вернет false

console.log(validator.isNumber("12345")); // Вернет true
console.log(validator.isNumber("12a45")); // Вернет false