function BinaryTreeNode(value, left, right) {
  this.value = value;
  this.left  = left;
  this.right = right;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

var root = new BinaryTreeNode(
  50,
  new BinaryTreeNode(
    30,
    new BinaryTreeNode(20, null, null),
    new BinaryTreeNode(40, null, null)
  ),
  new BinaryTreeNode(
    70,
    new BinaryTreeNode(60, null, null),
    new BinaryTreeNode(80, null, null)
  )
);

var counter = 0;
function find_second(root) {
  if(root == null || counter >= 2) return;
  
  find_second(root.right);
  if(++counter == 2) { console.log('found it -> ' + root.value);;}
  find_second(root.left);
}

find_second(root);

