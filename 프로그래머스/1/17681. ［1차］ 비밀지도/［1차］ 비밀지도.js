function solution(n, arr1, arr2) {
    const result = arr1.map((item, idx)=>{
        let num1 = item.toString(2);
        let num2 = arr2[idx].toString(2);
        let answer = (parseInt(num1,2) | parseInt(num2,2)).toString(2).padStart(n,'0');
        return answer.replaceAll(1,'#').replaceAll(0,' ');
    })
    return result;
}