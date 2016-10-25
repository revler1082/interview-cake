function highest_product(ints) {
  var results = [-1000, -1000, -1000];
  for(var i = 0; i < ints.length; ++i) {
    var current = ints[i];
    if(results.length < 3 || current > results[0]) {
      for(var j = 0; j < results.length; ++j) {
        if(current > results[j]) {
          var temp = results[j];
          results[j] = current;
          if(j-1 >= 0) results[j - 1] = temp;
        }
      }
    }
  }
  
  return results;
}

console.log(highest_product([10, 10, 1, 3, 2, 100, 19, 38, 22, 0, 3, 15]));