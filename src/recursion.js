
module.exports = function recursion(obj) {
  const result = [];

  const inner = (node, acc, depth) => {
    acc[depth] = acc[depth] ? acc[depth] : [];
    if (node.value) {
      acc[depth].push(node.value);
    }
    if (node.left) {
      inner(node.left, acc, depth + 1);
    }
    if (node.right) {
      inner(node.right, acc, depth + 1);
    }
  };

  inner(obj, result, 0);

  return result;
};
