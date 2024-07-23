function solution(sizes) {
    let result = [0, 0]
    sizes.map((item)=>{
        item.sort((a,b)=>b-a)
        if(result[0] < item[0]) result[0] = item[0]
        if(result[1] < item[1]) result[1] = item[1]
    })
    return result[0] * result[1];
}