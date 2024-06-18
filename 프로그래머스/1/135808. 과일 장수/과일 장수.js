function solution(k, m, score) {
    let scoreSort = score.sort((a,b)=>b-a);
    let result = 0;
    for(i=0; i<=scoreSort.length-m; i+=m) {
        result += scoreSort[i+m-1] * m
    }
    return result;
}