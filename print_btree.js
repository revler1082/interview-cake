var root = require('./example_tree');

function printBinaryTree(root, spacer) {
  if(root === null) return;
  if(spacer === null || spacer === undefined) spacer = '';
  console.log(spacer + root.value);  
  printBinaryTree(root.left, spacer + ' ');
  printBinaryTree(root.right, spacer + ' ');
}

printBinaryTree(root);
