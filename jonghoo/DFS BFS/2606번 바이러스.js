function solution(arr, n, m) {
  let graph = [];
  for (let i = 1; i <= n; i++) graph[i] = [];
  for (let i = 0; i < m; i++) {
    let [x, y] = arr[i].map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }
  console.log(graph);
  let cnt = 0;
  let visited = new Array(n + 1).fill(false);
  function dfs(x) {
    visited[x] = true;
    cnt++;
    for (i of graph[x]) {
      if (!visited[i]) {
        dfs(i);
      }
    }
  }
  dfs(1);
  return cnt - 1;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
      [1, 5],
      [5, 2],
      [5, 6],
      [4, 7],
    ],
    7,
    6
  )
);
