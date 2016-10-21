var TreeNode = require('./tree_node');

var root = new TreeNode(
  null,
  new TreeNode(
    this,
    new TreeNode(
      this,
      new TreeNode(
        this,
        null,
        null, 
        1
      ),
      null,
      3
    ),
    new TreeNode(
      this,
      new TreeNode(
        this,
        null,
        null,
        9
      ),
      new TreeNode(
        this, 
        null,
        null,
        15
      ),
      12
    ),
    6
  ),
  new TreeNode(
    this, 
    null,
    new TreeNode(
      this,
      new TreeNode(
        this,
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