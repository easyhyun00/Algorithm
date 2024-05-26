function solution(numbers) {
    let result = 0;
    for(i=0; i<10; i++) {
        if(!numbers.includes(i)) {
            result = result + i;
        }
    }
    return result; 
}