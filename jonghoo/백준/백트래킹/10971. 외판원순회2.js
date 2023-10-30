function solution(graph) {
  let N = graph.length;
  let arr = [];
  for (let i = 1; i <= N; i++) arr.push(i);
  let selected = [];
  let visited = new Array(N).fill(false);
  let answer = [];

  function dfs(arr, depth) {
    if (depth == N) {
      let result = [];
      for (x of selected) result.push(arr[x]);
      let sum = 0;
      for (let i = 0; i < result.length - 1; i++) {
        sum += graph[result[i] - 1][result[i + 1] - 1];
      }
      sum += graph[result[N - 1] - 1][result[0] - 1];
      answer.push(sum);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;
      selected.push(i);
      visited[i] = true;
      dfs(arr, depth + 1);
      selected.pop();
      visited[i] = false;
    }
  }
  dfs(arr, 0);
  return Math.min(...answer);
}

let test = [
  [0, 10, 15, 20],
  [5, 0, 9, 10],
  [6, 13, 0, 12],
  [8, 8, 9, 0],
];

console.log(solution(test));
