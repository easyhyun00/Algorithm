function solution(a, b) {
    const result = a.reduce((cur,acc,index)=>{
       return cur + ( acc * b[index]); 
    },0)
    return result;
}