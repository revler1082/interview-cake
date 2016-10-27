function max_duffel_bag_value(cake_tuples, capacity) {
  
  var max_caps = [];
  for(i = 0; i <= capacity; ++i) max_caps[i] = 0;
  var max_val = 0;
  
  for(var i = 0; i <= capacity; ++i) {
    for(var j = 0; j < cake_tuples.length; ++j) {
      if(cake_tuples[j][0] <= i) { // fits
        console.log('\tcurrent capacity: ' + i + ', cake_tuple: (' + cake_tuples[j][0] + ', $' + cake_tuples[j][1] + '), max[' + (i - cake_tuples[j][0]) + ']: ' + max_caps[i - cake_tuples[j][0]] + ', max_caps[' + i + ']: ' + max_caps[i]); 
        if(cake_tuples[j][1] + max_caps[i - cake_tuples[j][0]] > max_caps[i]) {
          max_caps[i] = cake_tuples[j][1] + max_caps[i - cake_tuples[j][0]];
          max_val = max_caps[i];
        }
      }
    }
  }

  return max_val;
}

cake_tuples = [[7, 160], [3, 90], [2, 15]];
console.log(max_duffel_bag_value(cake_tuples, 20));
