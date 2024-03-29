function solution(n, computers) {
  let check = Array.from({ length: n }, () => 0);
  let answer = 0;
  function DFS(node) {
    check[node] = 1;
    for (let i = 0; i < n; i++) {
      if (computers[node][i] == 1 && check[i] == 0) {
        DFS(i);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (check[i] == 0) {
      DFS(i);
      answer++;
    }
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
