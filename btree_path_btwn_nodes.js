var root = require('./example_tree_with_parents');

function findNode(v, t) {
    var nodes = [t];
    var steps = 0;
    while(nodes.length > 0) {
      var c = nodes[0];
      if(v == c.value) {
        console.log('found ' + v + ' in ' + steps + ' iterations');
        return c;  
      }
      if(v < c.value) nodes.splice(0, 1, c.left)
      else nodes.splice(0, 1, c.right);
      steps++;
    }
}

function findCommon(node_a, node_b) {
  var seen = {};
  while(true) {
    console.log(node_a, node_b);
    if(node_a !== null) {
      if(seen.hasOwnProperty(node_a.value)) return node_a;
      seen[node_a.value] = 1;
      node_a = node_a.parent || node_a;
    }
    
    if(node_b !== null) {
      if(seen.hasOwnProperty(node_b.value)) return node_b;
      seen[node_b.value] = 1;
      node_b = node_b.parent || node_b;
    }
    
    if(node_a.parent == null && node_b.parent == null) return node_a;
  }
}

if(require.main === module) {
  console.log(findCommon(findNode(3, root), findNode(15, root)).value);
}
