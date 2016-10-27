// can save space by ordering and checking?
function find_a_dupe(ints, n) {
    var num_to_times = {};
    for(var i = 0; i < ints.length; ++i) {
      if(num_to_times[ints[i]]) {
        return ints[i];        
      } else {
        num_to_times[ints[i]] = 1;
      }
    }  
}

var ints = [1, 5, 9, 2, 4, 19, 27, 44, 10, 3, 17, 28, 17, 99];
console.log(find_a_dupe(ints));
