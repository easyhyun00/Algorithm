function solution(n) {
    var answer = n - 1;
    for (i = 2; i <= answer; i++) {
        if (answer % i == 0) {
            return i;
        }
    }
}