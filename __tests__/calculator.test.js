import { Calculator } from './../src/calculator.js';

describe('Calculator', () => {

  test('should create an object with properties that calculate an inputted age into Mercury, Venus, Mars and Jupiter years', () => {
    const spacePerson = new Calculator(75);
    expect(spacePerson.mercuryAge).toEqual(18);
    expect(spacePerson.venusAge).toEqual(46.5);
    expect(spacePerson.marsAge).toEqual(141);
    expect(spacePerson.jupiterAge).toEqual(889.5);
  });

  test('should determine how many years have passed since the inputted birthday age', () => {
    const spacePerson = new Calculator(56);
    spacePerson.yearsSinceBirthday(43);
    expect(spacePerson.yearsPassed).toEqual(["13", "54.16", "20.96", "6.91", "1.09"])
  })

  test('should determine how many years have yet to pass until an inputted birthday age', () => {  
    const spacePerson = new Calculator(56);
    spacePerson.yearsUntilBirthday(61);
    expect(spacePerson.yearsUntil).toEqual(["5", "20.83", "8.06", "2.65", "0.42"])
  })
});