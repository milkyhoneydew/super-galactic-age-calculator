export class Calculator {
  
  constructor(age) {
      this.mercuryAge = parseInt(age) * .24;
      this.venusAge = parseInt(age) * .62;
      this.marsAge = parseInt(age) * 1.88;
      this.jupiterAge = parseInt(age) * 11.86;
  }
};