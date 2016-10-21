var root = require('./example_tree');

function inOrder(root, spacer) {
  if(root == null) return;
  inOrder(root.left, a);
  a.push(root.value);  
  inOrder(root.right, a);
}

function preOrder(root, a) {
  if(root == null) return;
  a.push(root.value);
  preOrder(root.left, a);
  preOrder(root.right, a);
}

function postOrder(root) {
  if(root == null) return;
  postOrder(root.left, a);
  postOrder(root.right, a);
  a.push(root.value);    
}

if(require.main === module) {
    var a = [];
    console.log(process.argv[2]);    
    switch(process.argv[2]) {
      case 'in': inOrder(root, a);
        break;
      case 'pre': preOrder(root, a);
        break;
      case 'post': postOrder(root, a);
        break;
      default: inOrder(root, a);
    }
    
    console.log(a);
}
