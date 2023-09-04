function solution(num) {
    var answer = num;
    var cnt = 0
    while (answer !== 1) {
        answer = answer % 2 == 0 ? answer/2 : answer*3+1;
        cnt++;
    }
    return cnt > 500 ? -1 : cnt;
}