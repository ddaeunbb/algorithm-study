function solution(m, n, puddles) {
  const divide = 1000000007;
  let answer = 0;
  let grid = Array.from({length: n+1}, () => Array(m+1).fill(10));
  puddles.forEach(([a,b])=> grid[a][b] = 0);
  
  for(let i = 1; i <=n; i++){
    for(let j = 1; j <= m; j++){
      if(i === 1 || j === 1) grid[i][j] = 1;
      else {
        if(grid[i][j] !== 0) grid[i][j] = grid[i-1][j] + grid[i][j-1];
      }
    }
  }

  answer = grid[n][m];
  return answer % divide
}

function solution(m, n, puddles) {
  const dp = new Array(n+1).fill().map(_ => new Array(m+1).fill(1));

  for(let i = 1; i < n; i++) {
    for(let j = 1; j < m; j++) {
      if(i === 1 && j === 1) {
        // 집의 위치를 1로 설정해주면
        // 아래 점화식을 통해 별다른 조건없이 직선 경로를 1로 초기화할 수 있다.
        dp[1][1] = 1;
        continue;
      }
      // 해당 반복문에서 j가 x좌표, i가 y좌표인 것에 주의하자!
      if(isPuddle(j, i, puddles)) continue;
      dp[i][j] = (dp[i-1][j] + dp[i][j-1]) % 1000000007;
    }
  }

  return dp[n][m];
}

const isPuddle = (x, y, puddles) => {
  for(const puddle of puddles) {
    if(puddle[0] === y && puddle[1] === x)
      return true;
  }
  return false;
}

console.log(solution(4, 3, [[2, 2]])) // 4

// [ [ 0, 0, 0, 0, 0 ],
// [ 0, 1, 0, 0, 0 ],
// [ 0, 0, 0, 0, 0 ] ]