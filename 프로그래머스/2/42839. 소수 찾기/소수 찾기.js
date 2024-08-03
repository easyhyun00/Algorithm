function solution(numbers) {
    const result = new Set();
    const isVisited = new Array(numbers.length).fill(false);
    
    // 탐색 함수
    const dfs = (num) => {
        if (num > 0) result.add(Number(num));

        for(let i=0; i<numbers.length; i++) {
            if(!isVisited[i]) {
                isVisited[i] = true;
                dfs(num + numbers[i]);
                isVisited[i] = false;
            }
        }
    }
    
    dfs('');
      
    // 소수판별 함수
    const isFrime = (num) => {
        if (num < 2) return false;
        for(j=2; j<=Math.sqrt(num); j++) {
            if (num % j === 0) return false;
        }
        return true;
    }
    
    return [...result].filter((item)=> isFrime(item)).length;
}