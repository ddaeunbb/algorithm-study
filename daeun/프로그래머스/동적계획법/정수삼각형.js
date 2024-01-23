// bottom-up 방식
function solution(triangle) {
  const dp = triangle.slice();
  console.log(dp);
  
  // (원본 배열 길이 - 2) 라인부터 0까지 진행하는 것에 주의하자
  for(let i = dp.length-2; i >= 0; i--) {
    for(let j = 0; j < dp[i].length; j++) {
      dp[i][j] += Math.max(dp[i+1][j], dp[i+1][j+1]);
    }
  }
  
  return dp[0][0];
}

// top-down 형식
function solution(triangle) {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      const firstCase = triangle[i - 1][j - 1] ?? 0;
      const secondCase = triangle[i - 1][j] ?? 0;

      if (secondCase >= firstCase) {
        triangle[i][j] += secondCase;
        console.log(triangle);
        continue;
      }
      triangle[i][j] += firstCase;
    }
  }
  return Math.max(...triangle.at(-1));
}
console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])) // 30