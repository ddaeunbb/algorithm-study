function solution(N) {
  let arr = [];
  for (let i = 1; i <= N; i++) arr.push(i);
  let visited = new Array(N).fill(false);
  let selected = [];
  let answer = [];
  function dfs(arr, depth) {
    if (depth == N) {
      let result = [];
      for (let x of selected) result.push(arr[x]);

      answer.push(result);

      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;
      selected.push(i);
      visited[i] = true;
      dfs(arr, depth + 1);
      visited[i] = false;
      selected.pop();
    }
  }
  dfs(arr, 0);
  return answer;
}

console.log(solution(3));
