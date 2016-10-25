stock_prices_yesterday = [40, 20, 10, 6, 4, 3];

function get_max_profit(prices) {
  if(prices.length < 2) return 0; // throw error?
  
  var result = { 
    buy: 0,
    sell: 0
  };
  
  var lowIdx = 0;
  var buyPrice = prices[0];
  var maxDiff = prices[1] - prices[0];
  for(idx in prices) {
    if(idx == 0) continue;
        
    if(prices[idx] - buyPrice > maxDiff) {
      maxDiff = prices[idx] - buyPrice;
      result.sell = idx;
      result.buy = lowIdx;
    }
    
    if(prices[idx] < buyPrice) {
      buyPrice = prices[idx];
      lowIdx = idx;
    }    
  }
  
  result.profit = maxDiff;
  console.log(result);
  return result;
}

if(require.main == module)
  get_max_profit(stock_prices_yesterday);