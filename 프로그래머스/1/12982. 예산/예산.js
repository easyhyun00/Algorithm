function solution(d, budget) {
    const arr = d.sort((a,b) => a-b);
    
    let result = 0;
    let money = 0;
    
    for (const item of arr) {
        if (budget >= money) {
            money += item;
            if (budget < money) break;
            result ++;
        }
    }
    return result;
}