function solution(s, n) {
    const result = s.split('').map((num) => {
        let codeNum = Number(num.charCodeAt() + n);
        
        if (codeNum - n === 32) codeNum = 32;
        if (codeNum > 90 && codeNum <= 90 + n) codeNum -= 26;
        else if (codeNum > 122 && codeNum <= 122 + n) codeNum -= 26;
        
        return String.fromCharCode(codeNum);
    })
    return result.join('');
}