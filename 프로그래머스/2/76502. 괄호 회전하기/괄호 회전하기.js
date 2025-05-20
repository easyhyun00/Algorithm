function solution(s) {    
    const len = s.length;
    let result = 0;
    
    for(let i=0; i<len; i++) {
        const stack = [];
        
        for(let j=0; j<len; j++) {
            const cur = s[(i+j)%len];
            if(cur === '[' || cur === '(' || cur === '{') {
                stack.push(cur)  
            } else { // ']' ')' '}'
                const last = stack.pop();
                if(cur === ']' && last !== '[' || cur === ')' && last !== '(' || cur === '}' && last !== '{' ) {
                    stack.push(cur);
                }
            }
        }
        if(stack.length === 0) result++;
    }
    return result;
}