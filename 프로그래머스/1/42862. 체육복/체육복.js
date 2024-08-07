function solution(n, lost, reserve) {  
    let result = n - lost.length;
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    let lostCopy = [...lost];
    let reserveCopy = [...reserve];
    
    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i])) {
            result += 1;
            reserveCopy = reserveCopy.filter(a => a !== lost[i]);
            lostCopy = lostCopy.filter(a => a !== lost[i]);
        }
    }
    
    lostCopy.forEach((l) => {
        if (reserveCopy.includes(l - 1)) {
            result += 1;
            reserveCopy = reserveCopy.filter(r => r !== l - 1);
        } else if (reserveCopy.includes(l + 1)) {
            result += 1;
            reserveCopy = reserveCopy.filter(r => r !== l + 1);
        }
    });
    
    return result;
}
