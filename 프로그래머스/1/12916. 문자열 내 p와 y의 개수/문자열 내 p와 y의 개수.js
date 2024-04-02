function solution(s){
    const arr = Array.from(s.toLowerCase());
    const result1 = arr.filter((i) => i === 'p');
    const result2 = arr.filter((i) => i === 'y');
    
    const res1 = result1.length;
    const res2 = result2.length;
    
    if(res1 === 0 && res2 === 0)
        return true;
    else if (res1 === res2)
        return true;
    else
        return false;
}