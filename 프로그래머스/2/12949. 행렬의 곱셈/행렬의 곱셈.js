function solution(arr1, arr2) {    
    const a1 = arr1.length;
    const b1 = arr2.length;
    const b2 = arr2[0].length;
    
    // 2차원 배열
    const result = [];
    for(let i=0; i<a1; i++) {
        result.push(new Array(b2).fill(0))   
    }
    
    for(let i=0; i<a1; i++) {
        for(let j=0; j<b2; j++) {
            for(let k=0; k<b1; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j]   
            }
        }
    }
    
    return result;
}