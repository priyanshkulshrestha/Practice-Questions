var maxProfit = function(prices) {
    let lowest = 10000;
    let currProfit = 0;
    let maxProfit = 0
    for(let i=0;i<prices.length;i++){
        if(prices[i] < lowest){
            lowest = prices[i];
        } 
        else if(prices[i]>lowest){
            currProfit = prices[i] - lowest;
        }
        if(maxProfit<currProfit){
            maxProfit = currProfit;
        }
    }
    return maxProfit;
};

//  -1 -2 -3 -4 1 2 3 4