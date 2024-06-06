function solution(t, p) {
    let result = 0;
    for(i = 0; i <= t.length - p.length; i++) {
        let num = 0;
        for(j = 0; j < p.length; j++) {
            num += t[i + j] * 10**(p.length - j - 1);
        }
        if (num <= p) result +=1;
    }
    return result;
}