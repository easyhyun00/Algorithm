function solution(number, limit, power) {
    let arr = []
    for(i=1; i<=number; i++) {
        arr.push(i);
    }
    const result = arr.reduce((acc,cur)=>{
        let cnt = 0;
        for(i=1; i<=Math.sqrt(cur); i++) {
            if (cur % i === 0) {
                if (i === Math.sqrt(cur)) cnt+=1;
                else cnt+=2;
            }
        }
        return acc += cnt > limit ? power : cnt;
    },0)
    return result;
}