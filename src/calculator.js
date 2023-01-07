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
    this.yearsPassed.push((this.age - birthday).toString());
    let mercury = ((this.age - birthday) / .24).toString();
    let mercurySlice = mercury.slice(0, (mercury.indexOf(".")) + 3);
    this.yearsPassed.push(mercurySlice);
    let venus = ((this.age - birthday) / .62).toString();
    let venusSlice = venus.slice(0, (venus.indexOf(".")) + 3);
    this.yearsPassed.push(venusSlice);
    let mars = ((this.age - birthday) / 1.88).toString();
    let marsSlice = mars.slice(0, (mars.indexOf(".")) + 3);
    this.yearsPassed.push(marsSlice);
    let jupiter = ((this.age - birthday) / 11.86).toString();
    let jupiterSlice = jupiter.slice(0, (jupiter.indexOf(".")) + 3);
    this.yearsPassed.push(jupiterSlice);
  };

  yearsUntilBirthday(birthday) {
    // this.yearsUntil = [];
    // this.yearsUntil.push((birthday - this.age).toString());
    // let mercury = ((birthday - this.age) * .24)
  }
 
  
}
