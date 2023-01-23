const assert = require('assert');

describe("converts from star wars years to earth years", () => {
  it('"0ABY" should give "1850 A.C."', () => {
    // arrange
    const fizzBuzzer = require('.');

    // act
    const actual = fizzBuzzer.getEarthYear("0ABY");

    // assert
    assert.strictEqual(actual, "1850 A.C.");
  });
});

describe("converts from earth years to star wars years", () => {
  it('"1ABY" should give "1851 A.C."', () => {
    // arrange
    const fizzBuzzer = require('.');

    // act
    const actual = fizzBuzzer.getStarWarsYear("1851 A.C.");

    // assert
    assert.strictEqual(actual, "1ABY");
  });
});