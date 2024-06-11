function solution(a1, b1 , n1) {
    let result = 0;
    
    // const a1 = 3;
    // const b1 = 2;
    // let n1 = 20;

    while(n1 >= a1) {
        const newItem = Math.floor(n1 / a1) * a1;
        console.log(newItem, "개를 가지고");
        console.log(newItem / a1 * b1, "개로 교환");
        result += newItem / a1 * b1,
        console.log(result, '총 교환 개수');
        n1 = n1 - newItem + newItem / a1 * b1;
        console.log(n1, "가진 콜라");
        console.log('');
    }
    return result;
}