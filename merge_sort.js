
function merge(a, b) {
  var result = [];
  var left =0, right = 0;
  while(left < a.length && right < b.length) {
    if(a[left] < b[right]) result.push(a[left++])
    else result.push(b[right++]);
  }
  
  return result.concat(a.slice(left)).concat(b.slice(right));
}

function mergeSort(q) {
  if(q.length <= 1) return q;
  var left = q.slice(0, q.length / 2);
  var right =  q.slice(q.length / 2, q.length);
  return merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;

if(require.main === module) {
  console.log(mergeSort(process.argv.slice(2, process.argv.length).map(function(v, i) {
    return parseInt(v);
  })));
}
