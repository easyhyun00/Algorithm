function solution(number, k) {
    const arr = [...number].map((item)=>Number(item));
    const result = [];
    
    for(i=0; i<arr.length; i++) {
        
        while (k > 0 && result.length > 0 && result[result.length - 1] < arr[i]) {
            result.pop();
            k -= 1;
        }
        
        result.push(arr[i]);
    }
    
    if (k > 0) {
        return result.slice(0, result.length - 1).join('');
    }
    
    return result.join('');
}