function solution(n, arr) {
  let answer = 0;
  let check = Array.from({ length: n + 1 }, () => 0);
  let graph = Array.from({ length: n + 1 }, () => []);
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  function DFS(L) {
    check[1] = 1;
    if (L === n) {
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[L].includes(i) && check[i] === 0) {
          check[i] = 1;
          DFS(i);
          check[i] = 0;
        }
      }
    }
  }
  DFS(1);
  return answer;
}

console.log(
  solution(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
