function solution(genres, plays) {
    const table = new Map();
    const result = [];
    
    const songs = genres.map((item, index)=>{
        table.set(item, (table.get(item) || 0) + plays[index])
        return [item, plays[index], index]
    }).sort(([, a,], [, b,]) => b-a);
    
    const order = [...table].sort(([, a], [, b]) => b-a);
    
    order.map((item)=>{
        let cnt = 0;
        for(const music of songs) {
            if(music[0] === item[0]) {
                cnt ++;
                result.push(music[2]);
            } 
            if (cnt === 2) break;
        }
    })
    
    return result;
}