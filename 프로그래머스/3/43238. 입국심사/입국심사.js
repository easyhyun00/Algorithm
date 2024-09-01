function solution(n, times) {
    const sorted = times.sort((a, b) => a - b);
    let start = 1;
    let end = sorted[sorted.length - 1] * n;
    
    
    while (start <= end) {
        const mid = Math.floor((start + end) / 2); 
        //  (시간 / 심사시간 으로 입국자수를 구할수있다.)
        const sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

        if (sum < n) {
            start = mid + 1
        } else {
            end = mid - 1;
        }
    }
    
    return start;
}