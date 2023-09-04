function solution(x, n) {
    var answer = [];
    for (i=1; i<=n; i++) {
        answer[i-1] = i*x;
    }
    return answer;
}