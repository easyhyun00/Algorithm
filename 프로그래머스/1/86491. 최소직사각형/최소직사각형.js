function solution(sizes) {
    const arr = sizes.map((size)=>{
        return size.sort((a,b) => a - b);
    })
    
    let width = arr[0][0];
    let height = arr[0][1];
    
    for(i=1;i<arr.length;i++) {
        if (arr[i][0] > width) width = arr[i][0]
        if (arr[i][1] > height) height = arr[i][1]
    }
    return width * height;
}