function solution(answers) {
    const one = [1,2,3,4,5];
    const two = [2,1,2,3,2,4,2,5];
    const three = [3,3,1,1,2,2,4,4,5,5];
    
    let result = [0,0,0];
    answers.map((item,index)=>{
        item === one[index % one.length] && result[0]++
        item === two[index % two.length] && result[1]++
        item === three[index % three.length] && result[2]++
    })
    
    let answer = [];
    const cnt = Math.max(...result);
    result.map((item,index)=>{
        item === cnt && answer.push(index+1);
    })
    
    return answer;
}