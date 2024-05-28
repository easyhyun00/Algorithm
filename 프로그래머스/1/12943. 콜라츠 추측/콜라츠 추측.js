function solution(num) {
    let result = num;
    let cnt = 0;
    while(result !== 1) {
        if (result % 2 === 0) {
            result = result / 2;
            cnt = cnt + 1;
        } else {
           result = result * 3 + 1;
            cnt = cnt + 1;
        }
        
        if (cnt >= 500) return -1;
    }
    return cnt;
}