function solution(left, right) {
    let result = 0;
    for(i=left; i<=right; i++) {
        result = result + (Math.sqrt(i) % 1 === 0 ? -i : + i)
    }
    return result;
}