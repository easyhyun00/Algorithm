function solution(s) {
    const arr = s.split(' ');
    const result = arr.map((word, i)=> {
        const newArr = word.split('').map((item,index)=>{
            if (index % 2 === 0) {
                return item.toUpperCase();
            } else {
                return item.toLowerCase();
            }
        })
        return newArr.join('') + (i === arr.length -1 ? '' : ' ');
    })
    return result.join('');
}