function solution(a, b) {
    const month = [31,29,31,30,31,30,31,31,30,31,30,31];
    const day = ['THU','FRI','SAT','SUN','MON','TUE','WED']
    const sum = month.reduce((acc,cur,idx)=>{
        return acc += a - 1 > idx ? cur : 0;
    },0)
    const start = sum%7;
    return day[(b+start)%7];
}