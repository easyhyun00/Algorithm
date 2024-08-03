function solution(word) {
    const vowels = ["A","E","I","O","U"];
    const result = {};
    let index = 0;
    
    const dfs = (w, len) => {
        if (len > 5) return;
        
        result[w] = index++;
        
        for (let i = 0; i < vowels.length; i++) {
            dfs(w + vowels[i], len + 1);
        }
    }
    
    dfs("", 0);
    
    return result[word];
}
