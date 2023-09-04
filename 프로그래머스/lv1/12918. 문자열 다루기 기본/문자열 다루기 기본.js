function solution(s) { // 예외 케이스 때문에 어려웠음
    if (s.length === 4 || s.length === 6) {
        const pattern = /^[0-9]+$/;
        return pattern.test(s);
  } else return false;
}