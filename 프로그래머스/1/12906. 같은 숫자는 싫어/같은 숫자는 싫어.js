function solution(arr) {
    return arr.filter((item,idx) => item !==arr[idx-1]);
}