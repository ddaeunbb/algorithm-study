function solution(m, n, puddles) {
  let graph = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));
  graph[1][1] = 0;
  for (let [a, b] of puddles) {
    graph[a][b] = -1;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i + 1 <= m) {
        if (graph[i + 1][j] == 0) {
          graph[i + 1][j] = graph[i][j] + 1;
        } else if (graph[i + 1][j] !== -1) {
          graph[i + 1][j] = Math.min(graph[i + 1][j], graph[i][j] + 1);
        }
      }
      if (j + 1 <= n) {
        if (graph[i][j + 1] == 0) {
          graph[i][j + 1] = graph[i][j] + 1;
        } else if (graph[i + 1][j] !== -1) {
          graph[i][j + 1] = Math.min(graph[i][j + 1], graph[i][j] + 1);
        }
      }
    }
  }

  return graph;
}
console.log(solution(4, 3, [[2, 2]]));
