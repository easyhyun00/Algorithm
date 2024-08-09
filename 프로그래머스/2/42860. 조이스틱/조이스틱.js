const alphaToASCII = (char) => {
  return char.charCodeAt();
};

function solution(name) {
    const A_ASCII = alphaToASCII('A')
    const Z_ASCII = alphaToASCII('Z') + 1
    let result = 0;
    let move = name.length - 1;
    
    [...name].map((item,index) => {
        const item_ASCII = alphaToASCII(item);
        
        // A부터 증가 vs Z부터 감소
        result += Math.min(item_ASCII - A_ASCII, Z_ASCII - item_ASCII);
        
        // 이동 거리 계산
        for (let i = 0; i < name.length; i++) {
            // 다음 인덱스
            let next_index = i + 1;
            
            // 다음이 A 면 계속 이동
            while (next_index < name.length && name[next_index] === 'A') {
                next_index++;
            }
            
            // 오른쪽으로 이동 vs 다시 앞에서부터 이동
            move = Math.min(move, i + (name.length - next_index) + Math.min(i, name.length - next_index));   
        }
    })
    return move + result;
}