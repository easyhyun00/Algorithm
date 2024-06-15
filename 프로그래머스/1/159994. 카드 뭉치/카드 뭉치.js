function solution(cards1, cards2, goal) {
    let secondIdx = 0;
    for(i=0; i<goal.length; i++) {
        if (goal[i] === cards1[i - secondIdx]) continue;
        else {
            if (goal[i] === cards2[secondIdx]) {
                secondIdx += 1;
                continue;
            } else return "No";
        }
    }
    return "Yes";
}