function solution(n) {
    var arr = Array.from(n.toString(3));
    var answer = arr.reduce((acc,cur,idx)=> acc + cur*(3**idx) ,0);
    return answer;
}