function solution(absolutes, signs) {
    const result = absolutes.reduce((cur,item,index) => {
        const sign = signs[index] ? 1 : -1;
        return cur + (item * sign);
    },0)
    return result;
}