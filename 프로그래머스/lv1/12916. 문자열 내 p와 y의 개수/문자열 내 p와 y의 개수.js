function solution(s){
    const str = s.toLowerCase().split('');
    const p = str.filter((ch => ch == 'p')).length;
    const y = str.filter((ch => ch == 'y')).length;
    
    if (p == y) {
        return true;
    } else {
        return false;
    }
}