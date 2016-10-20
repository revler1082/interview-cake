
function swapCharacters(str, first, last) {
  if(q === null || q === undefined || typeof(q) !== 'string') {
    throw '"str" argument type is not "string"';
  } else {
    return str.substr(0, first) 
      + str[last] 
      + str.substring(first + 1, last) 
      + str[first] 
      + str.substr(last + 1);
  }
}

function reverse(q) {
  if(q.length <= 1) return q;
  for(var i = 0; i < q.length / 2; ++i) {
    q = swapCharacters(q, i, q.length - i - 1);
  }
  
  return q;
}

module.exports = function(q) {
  if(q === null || q === undefined || typeof(q) !== 'string') {
    return q;
  } else {
    
    var result = '';
    var r = reverse(q);
    var word = '';    
    for(var i = 0; i < r.length; ++i) {
      if(r[i] === ' ') {
        word = reverse(word);
        result += word + ' ';
        word = '';
      } else {
        word += r[i];
      }
    }
    
    return result + reverse(word);
  }
};

if(require.main === module) {
  var q = process.argv.length > 2 ? process.argv[2] : null;
  console.log(module.exports(q));
}
