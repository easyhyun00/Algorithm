function solution(n) {
    const arr = [false, false, ...Array(n-1).fill(true)];
    
    for(i=2; i<=Math.sqrt(n); i++) {
        if (arr[i]) {
            for(j=i*2; j<=n; j+=i) {
                arr[j] = false;
            }
        }
    }
    
    return arr.filter((e)=>e).length;
}