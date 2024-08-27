// 서로 다른 글자가 1개라면 true, 그렇지 않으면 false
const isConnect = (word1, word2) => {
    let cnt = 0;
    
    for(let i=0; i<word1.length; i++) {
        if (word1[i] !== word2[i]) cnt++;
    }
    
    return cnt === 1;
}

function solution(begin, target, words) {
    // 방문 여부 저장
    const visit = { [begin] : 0 }; 
    // que
    const que = [begin];
    
    while (que.length > 0) {
        const current = que.shift();
        
        // current 가 target 이면 break;
        if (current === target) break;
        
        for (const word of words) {
            // current 와 word 가 연결되어 있고, word 가 방문된 글자가 아니면
            if (isConnect(current, word) && !visit[word]) {
                // 현재 방문 회수를 넣어줌
                visit[word] = visit[current] + 1;
                // que 에 넣음
                que.push(word);
            }
        }
    }
    return visit[target] || 0;
}