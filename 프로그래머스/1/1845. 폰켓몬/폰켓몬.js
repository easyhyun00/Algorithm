function solution(nums) {
    const table = new Map();
    
    nums.map((item)=>{
        table.set(item, true);
    })
    
    return Math.min(nums.length/2, table.size);
}