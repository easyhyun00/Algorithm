function solution(numbers) {
    let arr = []
    for(i=0; i<numbers.length - 1; i++) {
        for (j=i+1; j<numbers.length; j++) {
            arr.push(numbers[i] + numbers[j]);
        }
    }
    const result = new Set(arr.sort((a,b)=> a - b));
    return [...result];
}