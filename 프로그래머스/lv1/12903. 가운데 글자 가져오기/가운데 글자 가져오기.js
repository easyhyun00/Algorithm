function solution(s) {
    const arr = Array.from(s);
    const len = arr.length;
    var answer = '';
    if (len % 2 !== 0) {
        answer = arr[Math.floor(len/2)];
    } else {
        answer = arr[(len/2)-1] + arr[len/2]
    }
    return answer;
}