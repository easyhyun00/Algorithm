function solution(arr1, arr2) {
    const result = arr1.map((itemArr,index1) => {
       return itemArr.map((item, index2)=> {
           return item += arr2[index1][index2]
       }) 
    })
    return result;
}