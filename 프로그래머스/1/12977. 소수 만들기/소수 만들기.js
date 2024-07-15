function solution(nums) { 
    const arr = [];
    
    const len = nums.length;
    
    for(i=0; i<len-2; i++) {
        for(j=i+1; j<len-1; j++) {
            for(k=j+1; k<len; k++) {
                const number = nums[i] + nums[j] + nums[k]
                arr.push(number);      
            }
        }
    }
    
    // const result = [...new Set(arr)];
    
    return arr.filter((item)=>{
        let cnt = 0;
        for (i=1; i<=Math.sqrt(item); i++) {
            if(item % i === 0) cnt+=1;
        }
        return cnt < 2;
    }).length;
}