var root = require('./example_tree');

var count = 0;
function get_count_of_node(root, lower, upper) {
  if(root == null) return;
  get_count_of_node(root.left, lower, upper);
  if(root.value >= lower && root.value <= upper) count++;
  get_count_of_node(root.right, lower, upper);  
  return count;
}

console.log(get_count_of_node(root, 1, 14));
