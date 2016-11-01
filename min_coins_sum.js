
function min_coins(coin_values, sum) {
  var min_at = [];
  for(var i = 0; i <= sum; ++i) min_at.push(Infinity);
  min_at[0] = 0;
  
  for(var i = 1; i <= sum; ++i) {    
    var current_sum = i;    
    for(var j = 0; j < coin_values.length; ++j) {
      var coin_value = coin_values[j];
      if(current_sum - coin_value >= 0) {
        var m = min_at[current_sum - coin_value];
        var nm = m + 1;
        if( nm < min_at[current_sum] )
          min_at[current_sum] = nm;
      }
    }
  }
  
  return min_at[sum];
}

var coin_vals = [1, 11, 20];
var sum = 24;
console.log('coin_vals, sum, min_coins');
console.log(coin_vals, sum, min_coins(coin_vals, sum));
coin_vals = [1, 3, 5];
sum = 11;
console.log(coin_vals, sum, min_coins(coin_vals, sum));
