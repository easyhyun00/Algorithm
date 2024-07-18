function solution(progresses, speeds) {
    let arr = [];
    
    for(j=0; progresses.length !== 0; j++) {
        console.log(progresses);
         while (progresses[0] < 100) {
            for(i=0; i<progresses.length; i++) {
                progresses[i] += speeds[i]
            }
        }
        
        console.log(progresses);
       
        let cnt = 0;
        
        for(k=0; progresses.length !== 0; k++) {
            if(progresses[k]>=100) {
                cnt++;
                progresses.splice(k, 1);
                speeds.splice(k,1);
                k--;
            } else break;
        }
        
        arr.push(cnt);
        console.log(progresses);
        console.log();
    }
    return arr;
}