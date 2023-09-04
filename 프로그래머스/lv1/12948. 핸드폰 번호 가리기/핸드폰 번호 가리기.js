function solution(phone_number) {
    const arr = Array.from(phone_number);
    for (i=0; i<arr.length -4; i++) {
        arr[i] = '*';
    }
    return arr.join('');
}