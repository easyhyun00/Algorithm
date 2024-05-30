function solution(price, money, count) {
    const total = new Array(count).fill(price).reduce((cur,acc,index) => {
        return cur + acc * (index + 1)
    },0)
    return total <= money ? 0 : total - money;
}