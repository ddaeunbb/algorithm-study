/* 정수 삼각형
위와 같은 삼각형의 꼭대기에서 바닥까지 이어지는 경로 중, 
거쳐간 숫자의 합이 가장 큰 경우를 찾아보려고 합니다. 
아래 칸으로 이동할 때는 대각선 방향으로 한 칸 오른쪽 또는 왼쪽으로만 이동 가능합니다. 
예를 들어 3에서는 그 아래칸의 8 또는 1로만 이동이 가능합니다.

삼각형의 정보가 담긴 배열 triangle이 매개변수로 주어질 때, 거쳐간 숫자의 최댓값을 return 하도록 solution 함수를 완성하세요.

제한사항
- 삼각형의 높이는 1 이상 500 이하입니다.
- 삼각형을 이루고 있는 숫자는 0 이상 9,999 이하의 정수입니다.
*/

const solution = (triangle) => {
  let answer = 0;

  const dfs = (x, y, sum) => {
    // x = v
    // 가장 아래까지 확인 끝났으면 해당 경우의 경로 합과 answer 비교해서 값 설정
    if (x >= triangle.length - 1) {
      if (sum > answer) {
        answer = sum;
      }
      return;
    } else {
      // 두 가지 선택할 수 있는 경우로 dfs 수행 (선택 안하는 건 x)
      dfs(x + 1, y, sum + triangle[x + 1][y]);
      dfs(x + 1, y + 1, sum + triangle[x + 1][y + 1]);
    }
  };

  dfs(0, 0, triangle[0][0]);

  return answer;
};

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])); // 30

// reference
const reference = (triangle) => {
  // bottom-up 방식
  const dp = triangle.slice();

  // (원본 배열 길이 - 2) 라인부터 0까지 진행하는 것에 주의하자
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
};
