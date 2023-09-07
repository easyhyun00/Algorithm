function solution(s) {
    var result = ''
    var arr = s.split(' ')
    for(i=0; i< arr.length; i++) {
        result += arr[i].split('').reduce((arr, cur, idx) => idx % 2 === 0 
                      ? arr + cur.toUpperCase() 
                      : arr + cur.toLowerCase(), '')
        if (i !== arr.length - 1)
            result += ' '
    }
    return result;
}