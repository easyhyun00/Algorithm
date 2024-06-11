function solution(s) {
    const sArr = s.split('');
    const result = sArr.map((item, index)=>{
        const lastIndex = sArr.slice(0,index).lastIndexOf(item);
        return lastIndex === -1 ? -1 : index - lastIndex;
    })
    return result;
}