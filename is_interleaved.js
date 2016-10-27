function is_interleaved(a, b, c) {
  // first build a hashtable of char to positions
  var a_idx = 0;
  var b_idx = 0;
  
  for(var i = 0; i < c.length; ++i) {
    if( c[i] == a[a_idx] ) {
      a_idx++;
      continue;
    }
    if( c[i] == b[b_idx] ) {
      b_idx++;
      continue;
    }
    
    return 0;
  } 

    return 1;
}

console.log(is_interleaved('YX', 'X', 'XXY'));
console.log(is_interleaved('XY', 'X', 'XXY'));
console.log(is_interleaved('AB', 'CD', 'ACBG'));
console.log(is_interleaved('AB', 'CD', 'ACBD'));
console.log(is_interleaved('AB', 'CD', 'CABD'));