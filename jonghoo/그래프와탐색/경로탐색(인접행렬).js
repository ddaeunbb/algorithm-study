function solution(n, arr) {
  let answer = 0;
  let graph = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0));
  let check = Array.from({ length: n + 1 }, () => 0);
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  function DFS(L) {
    check[1] = 1;
    if (L === n) {
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[L][i] == 1 && check[i] === 0) {
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

// function solution(n, vertex) {
//   let graph = Array.from({ length: n + 1 }, () => []);
//   let check = Array.from({ length: n + 1 }, () => 0);
//   for (let [a, b] of vertex) {
//     graph[a].push(b);
//   }
//   let answer = 0;
//   function DFS(L) {
//     check[1] = 1;
//     if (L == n) answer++;
//     else {
//       for (let i = 0; i < graph[L].length; i++) {
//         if (check[graph[L][i]] == 0) {
//           check[graph[L][i]] = 1;
//           DFS(graph[L][i]);
//           check[graph[L][i]] = 0;
//         }
//       }
//     }
//   }
//   DFS(1);
//   return answer;
// }

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
