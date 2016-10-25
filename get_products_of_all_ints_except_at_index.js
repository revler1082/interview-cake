function get_products_of_all_ints_except_at_index(a) {  
  var before = a.slice(0, a.length);
  var after = a.slice(0, a.length);
  
  var so_far = 1;
  for(idx in before) {
    before[idx] = so_far;
    so_far *= a[idx];
  }
  
  so_far = 1;
  for(var i = after.length - 1; i >= 0; --i) {
    after[i] = so_far;
    so_far *= a[i];    
  }
  
  
  console.log(before);
  console.log(after);
  
  var result = [];
  for(idx in a) {
    result[idx] = before[idx] * after[idx];
  }
  
  return result;
}

console.log(get_products_of_all_ints_except_at_index([1, 7, 3, 4]));
