/* 동전교환
다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환
해주려면 어떻게 주면 되는가? 각 단위의 동전은 무한정 쓸 수 있다.
▣ 입력설명
첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다. 두 번째 줄에는 N개의 동전의 종
류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다.
각 동전의 종류는 100원을 넘지 않는다.
▣ 출력설명
첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다.
 */

const solution = (m, arr) => {
  let answer = Number.MAX_SAFE_INTEGER;

  const dfs = (v, sum) => {
    // 동전 선택한 횟수와 선택한 동전들의 값의 합을 받음
    // 이때까지 선택한 동전들의 합이 m 보다 크면 탈출
    if (sum > m) return;
    // 선택한 횟수가 이전 경우보다 넘어서면 볼 필요 없으니 탈출
    if (v >= answer) return;

    if (sum === m) {
      // 정답인 경우, 동전을 고른 횟수 (즉, v가 답이 된다.)
      // 해당 경우의 v와 이전 경우 중 최솟값인 answer을 비교해서 v가 더 작으면 바꿔준다.
      answer = Math.min(answer, v);
    } else {
      // 아직 선택한 동전들의 합이 m이 되지 않았으면 다시 dfs 돌린다.
      for (let i = 0; i < arr.length; i++) {
        dfs(v + 1, sum + arr[i]);
      }
    }
  };

  dfs(0, 0);
  return answer;
};
let arr = [1, 2, 5];
console.log(solution(15, arr)); // 3 (5, 5, 5)
