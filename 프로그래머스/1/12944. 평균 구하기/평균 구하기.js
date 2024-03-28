function solution(arr) {
    const sum = arr.reduce((acc,item) => {
        return acc + item;
    },0)
    return sum / arr.length
}