var words = {"i":1, "like":1, "sam":1, "sung":1, "samsung":1, "mobile":1, "ice":1, "cream":1, "icecream":1, "man":1, "go":1, "mango":1 };
function word_break(word) {
  var last_break_idx = -1;
  var window_size = word.length;
  var result = {};
  var seen = {};
  while(window_size > 0) {
    var moves = word.length - window_size + 1;
    for(i = 0; i < moves; ++i) {
      var sub_word = word.substr(i, window_size);
      console.log('looking @ "' + sub_word);
      if(words[sub_word] && !seen[sub_word]) {
        console.log("\twe have it in dictionary");
        result[i] = sub_word;
        seen[sub_word] = 1;
      }
    }
    
    --window_size;
  }
  
  return result;
}

console.log(word_break('ilike'));
console.log(word_break('ilikesamsung'));
