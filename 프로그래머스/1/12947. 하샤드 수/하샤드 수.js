function solution(x) {
    let sum = 0;
    let num = x;
    while (x > 0) {
        sum = sum + (x % 10);
        x = Math.floor(x / 10);
    }
    return num % sum ? false : true;
}