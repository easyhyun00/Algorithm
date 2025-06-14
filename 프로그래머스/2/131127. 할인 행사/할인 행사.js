/**
 * 할인 행사
 * [https://school.programmers.co.kr/learn/courses/30/lessons/131127]
 */

const checkDiscount = (wantHash, discountHash) => {
  if (Object.keys(wantHash).length !== Object.keys(discountHash).length)
    return false;

  for (const key in wantHash) {
    if (discountHash[key] !== wantHash[key]) {
      return false;
    }
  }
  return true;
};

const solution = (want, number, discount) => {
  // 사고 싶은 것
  const wantHash = {};
  for (let i = 0; i < want.length; i++) {
    wantHash[want[i]] = number[i];
  }

  let result = 0;

  // 특정일 가입 시 할인 받을 수 있는 것
  for (let i = 0; i < discount.length - 9; i++) {
    const discountHash = {};
    for (let j = i; j < i + 10; j++) {
      if (discountHash[discount[j]]) discountHash[discount[j]] += 1;
      else discountHash[discount[j]] = 1;
    }

    // 할인하는 상품 개수와 원하는게 일치하면 + 1
    if (checkDiscount(wantHash, discountHash)) result += 1;
  }

  return result;
};
