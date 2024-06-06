function solution(n, m) {
    var answer = [];
    for(i=Math.max(n,m); i>=1; i--) {
        if(n % i === 0 && m % i === 0) {
            answer.push(i);
            break;
        }
    }
    const n2 = n;
    const m2 = m;
    while (n !== m) {
        if (n > m) m += m2;
        else n += n2;
    }
    answer.push(n);
    return answer;
}