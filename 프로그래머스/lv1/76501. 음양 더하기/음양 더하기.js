function solution(absolutes, signs) {
    var sum = 0;
    for (i=0; i< absolutes.length; i++) {
        sum += signs[i] ? absolutes[i] : -absolutes[i];
    }
    return sum;
}