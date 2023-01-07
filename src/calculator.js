export class Calculator {
  
  constructor(age) {
    this.age = parseInt(age);
    this.mercuryAge = parseInt(age) * .24;
    this.venusAge = parseInt(age) * .62;
    this.marsAge = parseInt(age) * 1.88;
    this.jupiterAge = parseInt(age) * 11.86;
  };

  yearsSinceBirthday(birthday) {
    this.yearsPassed = [];
    let earthYears = this.age - birthday;
    this.yearsPassed.push((earthYears).toString());
    let mercury = ((earthYears) / .24).toString();
    let mercurySlice = mercury.slice(0, (mercury.indexOf(".")) + 3);
    this.yearsPassed.push(mercurySlice);
    let venus = ((earthYears) / .62).toString();
    let venusSlice = venus.slice(0, (venus.indexOf(".")) + 3);
    this.yearsPassed.push(venusSlice);
    let mars = ((earthYears) / 1.88).toString();
    let marsSlice = mars.slice(0, (mars.indexOf(".")) + 3);
    this.yearsPassed.push(marsSlice);
    let jupiter = ((earthYears) / 11.86).toString();
    let jupiterSlice = jupiter.slice(0, (jupiter.indexOf(".")) + 3);
    this.yearsPassed.push(jupiterSlice);
  };

  yearsUntilBirthday(birthday) {
    this.yearsUntil = [];
    let earthYears = birthday - this.age;
    this.yearsUntil.push((earthYears).toString());
    let mercury = ((earthYears) / .24).toString();
    let mercurySlice = mercury.slice(0, (mercury.indexOf(".")) + 3);
    this.yearsUntil.push(mercurySlice);
    let venus = ((earthYears) / .62).toString();
    let venusSlice = venus.slice(0, (venus.indexOf(".")) + 3);
    this.yearsUntil.push(venusSlice);
    let mars = ((earthYears) / 1.88).toString();
    let marsSlice = mars.slice(0, (mars.indexOf(".")) + 3);
    this.yearsUntil.push(marsSlice);
    let jupiter = ((earthYears) / 11.86).toString();
    let jupiterSlice = jupiter.slice(0, (jupiter.indexOf(".")) + 3);
    this.yearsUntil.push(jupiterSlice);
  };
}
