function solution(answers) {
    const one = [1,2,3,4,5];
    const two = [2,1,2,3,2,4,2,5];
    const three = [3,3,1,1,2,2,4,4,5,5];
    
    let cnt = [0, 0, 0]
    answers.map((item, index)=>{
        if (item === one[index % one.length]) cnt[0] += 1
        if (item === two[index % two.length]) cnt[1] += 1
        if (item === three[index % three.length]) cnt[2] += 1
    })
    const big = Math.max(...cnt);
    let answer = [];
    for(i=0; i<cnt.length; i++) {
        if (cnt[i] === big) answer.push(i + 1);
    }
    return answer;
}