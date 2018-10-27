module.exports = function sumOfOthers(array) {
  const reduced = array.reduce((acc, item) => acc + item, 0);
  return array.map(item => reduced - item);
};
