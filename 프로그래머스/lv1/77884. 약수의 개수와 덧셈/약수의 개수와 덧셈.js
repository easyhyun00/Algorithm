function solution(left, right) {
    var sum = 0;
    for (i=left; i<=right; i++) {
        sum += Math.sqrt(i) % 1 == 0 ? -i : i;
    }
    return sum;
}