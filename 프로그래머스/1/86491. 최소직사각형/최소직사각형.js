function solution(sizes) {
    let width = 0;
    let height = 0;
    sizes.map((item)=>{
        item.sort((a,b)=>b-a)
        if(width < item[0]) width = item[0]
        if(height < item[1]) height = item[1]
    })
    return width * height;
}