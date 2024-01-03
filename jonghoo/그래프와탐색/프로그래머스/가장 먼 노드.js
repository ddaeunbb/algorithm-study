function solution(n, vertex) {
  let graph = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0));
  let check = Array.from({ length: n + 1 }, () => 0);
  for (let [a, b] of vertex) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }
  let answer = [];
  for (let i = 1; i <= n; i++) {
    let queue = [];
    let route = 0;
    check[1] = 1;
    queue.push(1);
    if (check[i] == 1) {
      answer.push(route);
    } else {
      while (queue.length) {
        let v = queue.shift();
        check[v] = 1;
        for (let i = 0; i < n + 1; i++) {
          if (graph[v][i] == 1) {
            queue.push(i);
          }
        }
      }
    }
  }
  return answer;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
