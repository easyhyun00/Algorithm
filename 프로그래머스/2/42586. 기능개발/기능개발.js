function solution(progresses, speeds) {
    const result = [];
    
    while(progresses.length) {
        for(let i=0; i<progresses.length; i++) {
            progresses[i] += speeds[i]
        }
        
        let count = 0;
        while(progresses.length && progresses[0] >= 100) {
            count ++;
            progresses.shift();
            speeds.shift();
        }
        count && result.push(count)
        
    }
    return result;
}