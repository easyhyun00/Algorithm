function solution(prices) {
    const arr = [];
    
    for(i=0; i<prices.length-1; i++) {
        for(j=i+1; j<prices.length-1; j++) {
            if (prices[i] > prices[j]) {
                break;
            }
        }
        arr.push(Math.abs(i-j));
    }
    
    arr.push(0)
    
    return arr;
}