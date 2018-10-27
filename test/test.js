const assert = require('assert');
const sumOfOthers = require('../src/sumOfOthers');


console.log(sumOfOthers([2, 3, 4, 1]));
describe('#sumOfOthers()', () => {
  it('sumOfOthers([2, 3, 4, 1]) should return [8, 7, 6, 9]', () => {
    assert.deepEqual(sumOfOthers([2, 3, 4, 1]), [8, 7, 6, 9]);
  });
});
