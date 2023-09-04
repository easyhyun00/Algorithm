function solution(x) {
    var sum = 0;
    var num = x;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num/10);
    }
    return x % sum == 0 ? true : false;
}