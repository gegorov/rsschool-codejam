module.exports = function make(...args) {
  let buffer = args.slice();
  const inner = (...array) => {
    if (typeof array[0] === 'function') {
      return (buffer.reduce(array[0]));
    }
    buffer = buffer.concat(array);
    return inner;
  };
  return inner;
};
