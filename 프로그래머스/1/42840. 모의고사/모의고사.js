function solution(answers) {
    const result = [];
    const supo1 = [1,2,3,4,5];
    const supo2 = [2,1,2,3,2,4,2,5];
    const supo3 = [3,3,1,1,2,2,4,4,5,5];
    
    const count = [0,0,0];
    
    answers.map((item,index)=>{
        if(supo1[index%5] === item) count[0] += 1;
        if(supo2[index%8] === item) count[1] += 1;
        if(supo3[index%10] === item) count[2] += 1;
    })
    
    const max = Math.max(...count);
    count.map((item,index)=>{
        if(item === max) result.push(index+1)
    })
    return result;
}