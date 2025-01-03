function solution(babbling) {
    const arr = ['aya','ye','woo','ma'];
    let result = 0;
    
    babbling.forEach((item)=>{
        for(let word of arr) {
            if(item.includes(word.repeat(2))) {
                break;
            }
            
            item = item.split(word).join(" ");
            
        }
        if(item.trim().length === 0) result++;
    })
    
    return result;
}