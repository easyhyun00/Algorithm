function solution(price, money, count) {
    var sum = 0;
    while (count !== 0) {
        sum += count*price;
        count--;
    }
    return sum > money ? sum-money : 0;
}