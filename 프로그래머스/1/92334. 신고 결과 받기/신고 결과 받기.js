/**
 * 신고 결과 받기
 * [https://school.programmers.co.kr/learn/courses/30/lessons/92334]
 */

const solution = (id_list, report, k) => {
  const result = [];

  const reportHash = {};
  const countHash = {};

  report.forEach((item) => {
    const [reporter, target] = item.split(' ');

    if (reportHash[target] === undefined) {
      reportHash[target] = new Set();
    }

    reportHash[target].add(reporter);
  });

  Object.entries(reportHash).forEach(([_, reporters]) => {
    if (reporters.size >= k) {
      for (let reporter of reporters) {
        countHash[reporter] = (countHash[reporter] || 0) + 1;
      }
    }
  });

  id_list.forEach((id) => {
    result.push(countHash[id] || 0);
  });

  return result;
};
