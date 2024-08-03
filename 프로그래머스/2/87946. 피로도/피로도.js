// function solution(k, dungeons) {
//     let answer = [];
//     let visited = Array(dungeons.length).fill(false);

//     const dfs = (count, hp) => {
//         answer.push(count);
        
//         for (let i = 0; i < dungeons.length; i++) {
//             if (!visited[i] && dungeons[i][1] <= hp) {
//                 visited[i] = true;
//                 dfs(count + 1, hp - dungeons[i][1]);
//                 visited[i] = false;
//             }
//         }
//     }

//     dfs(0, k);
    
//     return Math.max(...answer);
// }

function solution(k, dungeons) {
    let answer = 0;
    let visited = new Array(dungeons.length).fill(false);


    function DFS(k, count) {

        for(let i=0; i<dungeons.length; i++) {
            if(k >= dungeons[i][0] && !visited[i]) {
                visited[i] = true;
                DFS(k-dungeons[i][1], count + 1);
                visited[i] = false; 
            }
        }

        answer = Math.max(answer, count);
    }

    DFS(k, 0);

    return answer;
}