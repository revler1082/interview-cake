var TreeNode = require('./tree_node');

var root = new TreeNode(
  null,
  new TreeNode(
    null,
    new TreeNode(
      null,
      new TreeNode(
        null,
        null,
        null, 
        1
      ),
      null,
      3
    ),
    new TreeNode(
      null,
      new TreeNode(
        null,
        null,
        null,
        9
      ),
      new TreeNode(
        null, 
        null,
        null,
        15
      ),
      12
    ),
    6
  ),
  new TreeNode(
    null, 
    null,
    new TreeNode(
      null,
      new TreeNode(
        null,
        null,
        null,
        48
      ),
      null,
      56
    ),
    46
  ),
  17
);

module.exports = root;