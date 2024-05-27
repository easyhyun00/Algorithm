function solution(phone_number) {
    const arr = Array.from(phone_number);
    const result = arr.map((item, index) => {
        if (index < arr.length - 4) {
            return "*"
        } else {
            return item;
        }
    })
    return result.join('');
}