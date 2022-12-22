import { Calculator } from './../src/calculator.js';

describe('Calculator', () => {

  test('should create an object with a property that calculates a inputted age into mercury years', () => {
    const spacePerson = new Calculator(75);
    expect(spacePerson.mercuryAge).toEqual(18);
  });
});