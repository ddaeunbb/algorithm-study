/* 최대점수 구하기(DFS)
이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를
풀려고 합니다. 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩
니다. 제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다. (해당문제는
해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다.)
▣ 입력설명
첫 번째 줄에 문제의 개수N(1<=N<=20)과 제한 시간 M(10<=M<=300)이 주어집니다.
두 번째 줄부터 N줄에 걸쳐 문제를 풀었을 때의 점수와 푸는데 걸리는 시간이 주어집니다.
▣ 출력설명
첫 번째 줄에 제한 시간안에 얻을 수 있는 최대 점수를 출력합니다. */

const solution = (m, ps, pt) => {
  let answer = 0;

  const dfs = (v, sum, time) => {
    // 제한 시간 넘어가면 dfs 탈출
    if (time > m) return;

    if (v === ps.length) {
      // 만약 문제 다 봤으면 max 담기
      answer = Math.max(answer, sum);
    } else {
      // 다음 문제 푸는 경우, 안 푸는 경우로 dfs 실행
      dfs(v + 1, sum + ps[v], time + pt[v]);
      dfs(v + 1, sum, time);
    }
  };

  dfs(0, 0, 0);
  return answer;
};
let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt)); // 41
