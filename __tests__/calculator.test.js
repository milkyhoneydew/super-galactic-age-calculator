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
    expect(spacePerson.yearsSinceBirthday(43)).toEqual(spacePerson.yearsPassed["13", "54.16", "20.96", "6.91", "1.09"])
  })

// test('should determine how many years have yet to pass until an inputted birthday age', () => {  
  //   const spacePerson = new Calculator(56);
  //   expect(spacePerson.yearsUntilBirthday(61)).toEqual("5 Earth years have yet to pass. \n20.83 Mercury years have yet to pass. \n20.96 Venus years have yet to pass. \n2.65 Mars years have yet to pass. \n.42 Jupiter years have yet to pass.")
  // })
});