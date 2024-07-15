function solution(n, m, section) {
    const arr = Array(n).fill(false);
    section.map((item)=>{
        arr[item-1] = true;
    })
    let cnt = 0;
    arr.map((item,idx)=>{
        if(item) {
            for(i=idx; i<idx+m; i++) {
                arr[i] = false;
            }
            cnt += 1;
        }
    })
    return cnt;
}