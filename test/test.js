const assert = require('assert');
const sumOfOthers = require('../src/sumOfOthers');
const make = require('../src/make');
const recursion = require('../src/recursion');

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

describe('#recursion()', () => {
  it('{"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,'
  + '"left":{"value":110},"right":{"value":130}}} should return [[100], [90, 120], [70,99,110,130]]',
  () => {
    const tree = {
      value: 100,
      left: {
        value: 90,
        left: {
          value: 70,
        },
        right: {
          value: 99,
        },
      },
      right: {
        value: 120,
        left: {
          value: 110,
        },
        right: {
          value: 130,
        },
      },
    };
    assert.deepEqual(recursion(tree), [[100], [90, 120], [70, 99, 110, 130]]);
  });
});
