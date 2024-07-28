function solution(brown, yellow) {
    const lineSum = (brown + 4)/2;
    const sum = brown + yellow
    
    for(i=2; i<=Math.sqrt(sum); i++) {
        if (sum % i === 0) {
            const j = sum / i;
            if (j + i === lineSum) return [j,i]
        }
    }
    
    return [];
}