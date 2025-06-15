/**
 * 베스트 앨범
 * [https://school.programmers.co.kr/learn/courses/30/lessons/42579]
 */

const solution = (genres, plays) => {
  const result = [];
  const gHash = {}; // 장르 별 재생 횟수 저장
  const pHash = {}; // 각 곡 재생 횟수 저장

  genres.forEach((genre, index) => {
    gHash[genre] = (gHash[genre] || 0) + plays[index];
    pHash[index] = { genre, play: plays[index] };
  });

  // 장르 내림차순 정렬
  const sortedGenres = Object.entries(gHash).sort((a, b) => b[1] - a[1]);
  // 각 곡 내림차순 정렬
  const sortedPlays = Object.entries(pHash).sort(
    (a, b) => b[1].play - a[1].play
  );

  sortedGenres.forEach(([genre, play]) => {
    let count = 0;
    for (let i = 0; i < sortedPlays.length; i++) {
      const [index, info] = sortedPlays[i];
      if (info.genre === genre) {
        result.push(Number(index));
        count++;
      }
      if (count === 2) {
        break;
      }
    }
  });

  return result;
};

console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500]
  )
);
