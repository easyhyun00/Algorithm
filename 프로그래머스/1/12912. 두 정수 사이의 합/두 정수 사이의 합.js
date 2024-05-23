function solution(a, b) {
    let result = 0;
    if(a > b) {
        let tmp = a;
        a = b;
        b = tmp;
    }
    for(let i = a; i <= b; i++) {
        result += i;
    }
    return result;
}