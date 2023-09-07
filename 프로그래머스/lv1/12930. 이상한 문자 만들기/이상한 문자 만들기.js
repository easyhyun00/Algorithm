function solution(s) {
    var result = ''
    var arr = s.split(' ')
    for(i=0; i< arr.length; i++) {
        for(j=0; j< arr[i].length; j++) {
            if (j % 2 === 0)
                result += arr[i][j].toUpperCase();
            else
                result += arr[i][j].toLowerCase();
        }
        if (i !== arr.length - 1)
            result += ' '
    }
    return result;
}