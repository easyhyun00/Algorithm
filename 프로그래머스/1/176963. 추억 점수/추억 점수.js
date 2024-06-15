function solution(name, yearning, photo) {
    return photo.map((item)=>{
        return item.reduce((acc,cur)=>{
            const index = name.indexOf(cur);
            return acc += index === -1 ? 0 : yearning[index];
        },0)
    })
}