function solution(number, limit, power) {
    const arr = []
    for(i=1; i<=number; i++) {
        arr.push(i);
    }
    return arr.reduce((acc, cur)=>{
       let cnt = 0;
        for(i = 1; i <= Math.sqrt(cur); i++) {
            if (cur % i === 0) {
                cnt += (i === cur / i) ? 1 : 2;
            }
        }
        return acc += cnt > limit ? power : cnt; 
    },0)
}