function solution(s){
    const arr = s.split('');
    const result = [];
    
    arr.map((item)=>{
        if (item === '(') result.push('(');
        else {
            if (result.length === 0) result.push(')');
            else result.pop();
        }
    })
    
    return result.length === 0;
}