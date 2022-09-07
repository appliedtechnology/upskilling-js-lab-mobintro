const assert = require('assert');

describe("single number", () => {
  it('1 should give "1"', () => {
    // arrange
    const fizzBuzzer = require('.');

    // act
    const actual = fizzBuzzer.single(1);

    // assert
    assert.strictEqual(actual, "1");
  });
});