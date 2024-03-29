/* 최대점수 구하기(냅색 알고리즘)
이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를
풀려고 합니다. 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩
니다. 제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다. (해당문제는
해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다.)

▣ 입력설명
첫 번째 줄에 문제의 개수N(1<=N<=20)과 제한 시간 M(10<=M<=300)이 주어집니다.
두 번째 줄부터 N줄에 걸쳐 문제를 풀었을 때의 점수와 푸는데 걸리는 시간이 주어집니다.
▣ 출력설명
첫 번째 줄에 제한 시간안에 얻을 수 있는 최대 점수를 출력합니다 */
const solution = (m, arr) => {
  let answer = 0;

  const dfs = (v, time, score) => {
    if (m < time || v > arr.length - 2) {
      return;
    }
    if (m === time) {
      if (answer < score) {
        answer = score;
      }
      return;
    } else {
      dfs(v + 1, time + arr[v + 1][1], score + arr[v + 1][0]);
      dfs(v + 1, time, score);
    }
  };

  dfs(0, arr[0][1], arr[0][0]);

  return answer;
};

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr)); // 41

const reference = (m, arr) => {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    // 문제 길이 수 만큼 돌면서 확인
    // 이번 문제 점수와 걸리는 시간 변수 설정
    let ps = arr[i][0];
    let pt = arr[i][1];
    for (let j = m; j >= pt; j--) {
      // 제한 시간부터 이번 문제 걸리는 시간만큼 남을 때 까지 1초씩 빼가면서 확인
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }

  answer = dy[m];
  return answer;
};

console.log(reference(20, arr)); // 41
