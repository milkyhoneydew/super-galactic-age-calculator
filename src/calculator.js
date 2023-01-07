export class Calculator {
  
  constructor(age) {
    this.age = parseInt(age);
    this.mercuryAge = parseInt(age) * .24;
    this.venusAge = parseInt(age) * .62;
    this.marsAge = parseInt(age) * 1.88;
    this.jupiterAge = parseInt(age) * 11.86;
  }

  yearsSinceBirthday(birthday) {
    this.yearsPassed = [];
    let earthYears = this.age - birthday;
    let earthString = earthYears.toString();
    let mercury = ((earthYears) / .24).toString();
    let mercuryString = mercury.slice(0, (mercury.indexOf(".")) + 3);
    let venus = ((earthYears) / .62).toString();
    let venusString = venus.slice(0, (venus.indexOf(".")) + 3);
    let mars = ((earthYears) / 1.88).toString();
    let marsString = mars.slice(0, (mars.indexOf(".")) + 3);
    let jupiter = ((earthYears) / 11.86).toString();
    let jupiterString = jupiter.slice(0, (jupiter.indexOf(".")) + 3);
    this.yearsPassed.push(earthString, mercuryString, venusString, marsString, jupiterString);
  }

  yearsUntilBirthday(birthday) {
    this.yearsUntil = [];
    let earthYears = birthday - this.age;
    let earthString = earthYears.toString();
    let mercury = ((earthYears) / .24).toString();
    let mercuryString = mercury.slice(0, (mercury.indexOf(".")) + 3);
    let venus = ((earthYears) / .62).toString();
    let venusString = venus.slice(0, (venus.indexOf(".")) + 3);
    let mars = ((earthYears) / 1.88).toString();
    let marsString = mars.slice(0, (mars.indexOf(".")) + 3);
    let jupiter = ((earthYears) / 11.86).toString();
    let jupiterString = jupiter.slice(0, (jupiter.indexOf(".")) + 3);
    this.yearsUntil.push(earthString, mercuryString, venusString, marsString, jupiterString);
  }
}
