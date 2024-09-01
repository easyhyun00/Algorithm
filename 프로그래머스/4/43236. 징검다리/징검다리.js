function solution(distance, rocks, n) {
    // 정렬하고, 맨 뒤에 도착지점 넣음
    const rockList = [...rocks.sort((a,b)=>a-b),distance];
    
    // 최소거리
    let left = 1;
    // 최대거리
    let right = distance;
    // 결과
    let result = 0;

    while (left <= right) {
        // 중간거리
        let mid = Math.floor((left + right) / 2); 
        
        // 이전 바위
        let prev = 0;
        // 제거한 바위 개수
        let cnt = 0;

        for (let i = 0; i < rockList.length; i++) {
            // 현재 바위와 이전 바위 사이의 거리
            let gap = rockList[i] - prev;

            // 거리가 중간거리보다 작으면 제거
            if (gap < mid) {
                cnt++;
            // 작지 않으면 이전 거리를 현재 위치로
            } else {
                prev = rockList[i];
            }
        }

        // 제거한 바위가 n 개 보다 많으면, right 를 줄여 중간거리를 좁힘
        if (cnt > n) {
            right = mid - 1; 
        // 제거한 바위가 n 개 보다 작거나 같으면, left 를 즐려 중간거리를 늘림
        } else {
            result = mid;
            left = mid + 1;
        }
    }

    return result;
}