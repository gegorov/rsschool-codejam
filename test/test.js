const assert = require('assert');
const sumOfOthers = require('../src/sumOfOthers');
const make = require('../src/make');

describe('#sumOfOthers()', () => {
  it('sumOfOthers([2, 3, 4, 1]) should return [8, 7, 6, 9]', () => {
    assert.deepEqual(sumOfOthers([2, 3, 4, 1]), [8, 7, 6, 9]);
  });
  it('sumOfOthers([]) should return empty array', () => {
    assert.deepEqual(sumOfOthers([]).length, 0);
  });
});


describe('#make()', () => {
  it('make(15)(2, 21)(100)(1, 2, 3)((a, b) => a + b) should return 777', () => {
    assert.equal(make(15)(34, 21, 666)(41)((a, b) => a + b), 777);
  });
  it('make(15)(2, 21)(100)(1, 2, 3)((a, b) => a + b) should return 144', () => {
    assert.equal(make(15)(2, 21)(100)(1, 2, 3)((a, b) => a + b), 144);
  });
  it('make(0)(0, 0)(0)(1, 2, 3)((a, b) => a + b) should return 0', () => {
    assert.equal(make(0)(0)(0)((a, b) => a + b), 0);
  });
  it('make(\'мама\')(\' \')(\'мыла раму\')((a, b) => a + b) should return "мама мыла раму"', () => {
    assert.equal(make('мама')(' ')('мыла раму')((a, b) => a + b), 'мама мыла раму');
  });
});
