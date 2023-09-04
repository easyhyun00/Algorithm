function solution(a, b) {
    if (a > b) {
        var tmp = b;
        b = a;
        a = tmp;
    }
    var answer = 0
    for (i=a; i<=b; i++) {
        answer += i;
    }
    return answer;
}