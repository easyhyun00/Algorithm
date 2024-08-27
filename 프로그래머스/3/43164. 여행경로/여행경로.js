function solution(tickets) {
    const result = [];
    const visited = [];
    
    tickets.sort();
    
    const dfs = (route, count) => {
        result.push(route);
        
        if (count === tickets.length) {
            return true;
        }
        
        for (let i = 0 ; i<tickets.length; i++) {
            if (!visited[i] && tickets[i][0] === route) {
                visited[i] = true;
                if (dfs(tickets[i][1], count + 1)) {
                    return true;
                }
                visited[i] = false;
            }
        }
        result.pop();
        return false;
    }
    
    dfs("ICN", 0);
    
    return result;
}