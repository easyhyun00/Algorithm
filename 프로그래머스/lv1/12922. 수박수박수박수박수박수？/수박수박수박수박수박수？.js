function solution(n) {
    var answer = [];
    while (answer.length !== n) {
        answer.length % 2 == 0 ? answer.push('수') : answer.push('박');
    }
    return answer.join('');
}