function solution(priorities, location) {
    const result = [];
    const twoArr = priorities.map((item,idx)=>{
        return [item,idx]
    })
    
    while(priorities.length) {
        const big = Math.max(...priorities);
        
        if (priorities[0] < big) {
            priorities.push(priorities.shift());
            twoArr.push(twoArr.shift());
        } else {
            result.push(priorities.shift());
            if (twoArr.shift()[1] === location) return result.length
        }
    }

}