
var results = [];
function perms(str, seen) {
  if(typeof(str) === 'string') str = str.split('');
  if(str.length === 0) results.push(seen.join(''));
  for(var i = 0; i < str.length; ++i) {
    var ch = str.splice(i, 1);
    seen.push(ch);
    perms(str, seen);
    seen.pop();
    str.splice(i, 0, ch)
  }
}

var input = 'ABC';
perms(input, []);
console.log(results);