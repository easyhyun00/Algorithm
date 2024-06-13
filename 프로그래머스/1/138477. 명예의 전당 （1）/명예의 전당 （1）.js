function solution(k, score) {
    let result = [];
    let list = [];
    score.map((item)=>{
        list.push(item);
        list.sort((a,b)=>b-a);
        result.push(list.slice(0, k).reverse()[0]);
    })
    return result;
}