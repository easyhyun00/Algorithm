function solution(a, b) {
    var sum = 0;
    for(i=0; i<a.length; i++) {
        sum += a[i]*b[i];
    }
    return sum;
}