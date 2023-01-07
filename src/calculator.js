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
    this.yearsPassed.push(this.age - birthday).toString();
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
  }
  // yearsSinceBirthday(birthday) {
  //       return `${(this.age - birthday).toString()} Earth years have passed. 
  //   ${((this.age - birthday) / .24).toString.slice(0, (indexOf(".")) + 3)} Mercury years have passed. 
  //   ${((this.age - birthday) / .62).toFixed(2)} Venus years have passed. 
  //   ${((this.age - birthday) / 1.88).toFixed(2)} Mars years have passed. 
  //   ${((this.age - birthday) / 11.86).toFixed(2)} Jupiter years have passed.`;
  //     }
    
    //   yearsUntilBirthday(birthday) {
    //     return `${(birthday - this.age).toString()} Earth years have yet to pass. 
    // ${birthday - this.mercuryAge} Mercury years have yet to pass. 
    // ${birthday - this.venusAge} Venus years have yet to pass. 
    // ${birthday - this.marsAge} Mars years have yet to pass. 
    // ${birthday - this.jupiterAge} Jupiter years have yet to pass.`;
    //   }
}
