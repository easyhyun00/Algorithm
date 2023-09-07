function solution(t, p) {
    var sum = 0;
    var str = ''
    for(i=0; i<t.length-p.length + 1; i++) {
        for (j=0; j<p.length; j++) {
            str += t[i+j];
        }
        console.log(str);
        if (Number(str) <= Number(p))
            sum ++
        str = ''
    }
    return sum;
}