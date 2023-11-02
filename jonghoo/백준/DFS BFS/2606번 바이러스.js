function solution(N, arr) {
  let graph = [];
  for (let i = 1; i <= N; i++) graph[i] = [];
  for (let i = 0; i < arr.length; i++) {
    let [x, y] = arr[i].map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }
  let cnt = 0;
  let visited = new Array(N + 1).fill(false);
  console.log(visited);
  function dfs(x) {
    visited[x] = true;
    cnt++;
    for (y of graph[x]) {
      if (!visited[y]) dfs(y);
    }
  }
  dfs(1);
  return cnt - 1;
}

console.log(
  solution(7, [
    [1, 2],
    [2, 3],
    [1, 5],
    [5, 2],
    [5, 6],
    [4, 7],
  ])
);
