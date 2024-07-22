function solution(citations) {
    let result = 0;
    
    citations.sort((a,b)=>b-a);
    console.log(citations);
    
    for(i=0; i<citations.length; i++) {
        if(citations[i] > i) result ++;
        else break;
    }
    return result;
}