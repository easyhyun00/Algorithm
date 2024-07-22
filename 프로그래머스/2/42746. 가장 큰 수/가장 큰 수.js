function solution(numbers) {
    numbers = numbers.map((item)=>item.toString());
    
    const result = numbers.sort((a,b) => (a+b) >= (b+a) ? -1 : 1).join('');

    return result[0] === '0' ? '0' : result;
}