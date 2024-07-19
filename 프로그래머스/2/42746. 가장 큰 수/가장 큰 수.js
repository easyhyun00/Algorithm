function solution(numbers) {
    numbers = numbers.map((item)=>item.toString());
    
    numbers.sort((a,b)=> (b+a) > (a+b) ? 1 : -1);
    
    return numbers.join('')[0] === '0' ? '0' : numbers.join('');
}