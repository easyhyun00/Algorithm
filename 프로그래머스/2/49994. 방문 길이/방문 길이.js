/**
* 좌표 범위 -5 ~ 5
* 범위 벗어나면 무시
* 처음 지나간 곳만 계산
*
* 중복 => Set 사용
* 좌표 음수 => 원점을 (5,5) 로
*/
function solution(dirs) {
    // 좌표
    let x = 0;
    let y = 0;
    
    // 이동 경로
    const visited = [];
    
    for(const dir of dirs) {
        // 이동하기 전 좌표
        let a = x;
        let b = y;
        
        // 좌표 이동
        if(dir === 'U') b += 1;
        if(dir === 'D') b -= 1;
        if(dir === 'R') a += 1;
        if(dir === 'L') a -= 1;
        
        // 유효성 검증
        if(a < -5 || a > 5 || b < -5 || b >5 ) {
            // 범위 벗어나면 다음으로
            continue;
        }
        
        // 이동 경로 추가
        visited.push([x,y,a,b].join('')); // 방향성이 없어 두가지 경우 넣어줘야 함       
        visited.push([a,b,x,y].join('')); // A->B, B->A
        
        // 좌표 업데이트
        x = a;
        y = b;
    }
    
    // 중복 제거
    // A->B, B->A 는 같은 경로이기 때문에 2로 나눔
    return [...new Set(visited)].length / 2;
}