function solution(food) {
    let result = '';
    for(i=1; i<food.length; i++) {
        const cnt = Math.floor(food[i] / 2);
        result += i.toString().repeat(cnt);
    }
    return result + 0 + result.split('').reverse().join('');
}