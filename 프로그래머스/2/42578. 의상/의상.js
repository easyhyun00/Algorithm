function solution(clothes) {
    const table = new Map();
    let result = 1;
    
    clothes.map(([a, b])=>{
        table.set(b, (table.get(b) || 1) + 1)
    })
    
    for(const [a,b] of table) {
        result *= b;
    }
    
    return result-1;
}