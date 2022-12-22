import { Calculator } from './../src/calculator.js';

describe('Calculator', () => {

  test('should create an object with properties that calculate an inputted age into Mercury, Venus, Mars and Jupiter years', () => {
    const spacePerson = new Calculator(75);
    expect(spacePerson.mercuryAge).toEqual(18);
    expect(spacePerson.venusAge).toEqual(46.5);
    expect(spacePerson.marsAge).toEqual(141);
    expect(spacePerson.jupiterAge).toEqual(889.5);
  });
});