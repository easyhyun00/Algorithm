function solution(n, m) {
    let answer = []
    for (i=1; i<=Math.max(n,m); i++) {
        if (n%i == 0 && m%i ==0)
            answer[0] = i    
    }
    
    let val1 = n
    let val2 = m
    while (n !== m) {
        if (n > m) {
            m += val2
        } else {
            n += val1
        }
    }
    answer.push(n)
        
    return answer;
}