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
    const spacePerson = new Calculator(75);
    expect(spacePerson.yearsSinceBirthday(50)).toEqual("25 Earth years have passed. \n-32 Mercury years have passed. \n-3.5 Venus years have passed. \n91 Mars years have passed. \n839.5 Jupiter years have passed.")
  })
});