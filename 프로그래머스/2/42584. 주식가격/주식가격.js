// 주식 가격
function solution(prices) {
    const stack = [];
    
    for(let i=0; i<prices.length; i++) {
        for(let j=i+1; j<prices.length; j++) {
            if(prices[i] > prices[j] || j === prices.length - 1) {
                stack.push(j-i)
                break;
            }
        }
    }
    stack.push(0);
    
    return stack;
}