
function max_apples(table) {
  var max_at_cell = [];
  for(var i = 0; i < table.length; ++i) max_at_cell.push([]);
  max_at_cell[0][0] = table[0][0];
  
  for(var row = 0; row < table.length; ++row) {
    for(var col = 0; col < table[row].length; ++col) {

      var left_apples = up_apples = 0;
      if(col - 1 >= 0) left_apples = max_at_cell[row][col - 1];
      if(row - 1 >= 0) up_apples = max_at_cell[row - 1][col];
      
      max_at_cell[row][col] = table[row][col] + Math.max(left_apples, up_apples);
      
      //console.log('table[row][col] = ' + table[row][col]);
      //console.log('Math.max(left_apples, up_apples) = ' + Math.max(left_apples, up_apples));
      //console.log('max_at_cell[' + row + '][' + col + '] = ' + max_at_cell[row][col]);
    }
  }
  
  console.log(max_at_cell);
  return max_at_cell[row-1][col-1];
}

var table = [
  [4, 8, 12, 4],
  [9, 2, 6, 2],
  [5, 6, 8, 2]
];

console.log(max_apples(table));
