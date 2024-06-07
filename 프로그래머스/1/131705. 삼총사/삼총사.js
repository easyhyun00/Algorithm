function solution(number) {
    const arr = number.sort((a,b) => a-b);
    const len = arr.length;
    let result = 0;
    
    for(i=0; i<len-2; i++) {
        for(j=i+1; j<len-1; j++) {
            for (k=j+1; k<len; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) result++;
            }
        }
    }
    return result;
}