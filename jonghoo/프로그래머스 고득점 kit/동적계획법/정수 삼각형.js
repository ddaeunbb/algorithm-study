function solution(triangle) {
  let dp = Array.from({ length: triangle.length }, () => []);
  for (let i = 0; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] = 0;
    }
  }
  dp[0][0] = triangle[0][0];
  for (let i = 0; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (i + 1 < triangle.length) {
        let x = triangle[i + 1][j];
        let y = triangle[i + 1][j + 1];
        dp[i + 1][j] = Math.max(dp[i][j] + x, dp[i + 1][j]);
        dp[i + 1][j + 1] = Math.max(dp[i][j] + y, dp[i + 1][j + 1]);
      }
    }
  }

  return Math.max(...dp[triangle.length - 1]);
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
