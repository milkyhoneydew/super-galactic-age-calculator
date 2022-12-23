export class Calculator {
  
  constructor(age) {
    this.age = parseInt(age);
    this.mercuryAge = parseInt(age) * .24;
    this.venusAge = parseInt(age) * .62;
    this.marsAge = parseInt(age) * 1.88;
    this.jupiterAge = parseInt(age) * 11.86;
  };

  yearsSinceBirthday(birthday) {
    return `${(this.age - birthday).toString()} Earth years have passed. 
${this.mercuryAge - birthday} Mercury years have passed. 
${this.venusAge - birthday} Venus years have passed. 
${this.marsAge - birthday} Mars years have passed. 
${this.jupiterAge - birthday} Jupiter years have passed.`
  };
}
