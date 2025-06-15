/**
 * 오픈 채팅방
 * [https://school.programmers.co.kr/learn/courses/30/lessons/42888]
 */

const solution = (record) => {
  const answer = [];
  const user = {};

  // 유저 정보 저장
  record.forEach((item) => {
    const [action, id, name] = item.split(' ');
    if (action === 'Enter' || action === 'Change') {
      user[id] = name;
    }
  });

  // 채팅 기록
  record.forEach((item) => {
    const [action, id] = item.split(' ');
    if (action === 'Enter') {
      answer.push(user[id] + '님이 들어왔습니다.');
    } else if (action === 'Leave') {
      answer.push(user[id] + '님이 나갔습니다.');
    }
  });

  return answer;
};
