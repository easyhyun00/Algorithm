function solution(board, moves) {
    const basket = [];
    let result = 0;
    
    moves.forEach((item)=>{
        for(let i=0; i<board.length; i++) {
            if(board[i][item-1]) {
                const current = board[i][item-1];
                if(basket[basket.length-1] === current) {
                    basket.pop();
                    result += 2;
                } else {
                    basket.push(board[i][item-1]);       
                }
                board[i][item-1] = 0; 
                break;
            }
        }
    })

    return result;
    
}