function solution(numbers) {
    var sum = 0;
    for (i=1; i< 10; i++) {
        sum += numbers.includes(i) ? 0 : i;
    }
    return sum;
}