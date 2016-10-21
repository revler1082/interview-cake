
function largestDiff(q) {
  var result = {
    buy: 0,
    sell: 0
  };
  
  var diff = 0;
  var low = 1000000;
  var lowIdx = 0;
  for(var i = 0; i < q.length; ++i) {
    if(q[i] < low) {
      low = q[i];
      lowIdx = i;
    }
    var d = q[i] - low;
    if(d > diff) {
      diff = d;
      result.buy = lowIdx;
      result.sell = i;
    }
  }

  console.log(q);
  return result;
}

if(require.main === module) {
  console.log(largestDiff(process.argv.slice(2, process.argv.length).map(function(v, i) {
    return parseInt(v);
  })));
}
