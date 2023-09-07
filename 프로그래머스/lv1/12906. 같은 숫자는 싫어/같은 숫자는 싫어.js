function solution(arr)
{  
    const result = arr.filter((value, idx) => {
        if (value === arr[idx+1]) {
            return false;
        } else {
            return true;
        }
    })
    return result;
}