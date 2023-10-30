function solution(n, m) {
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  let visited = new Array(n).fill(false);
  let selected = [];
  let answer = [];

  function dfs(arr, depth) {
    if (depth == m) {
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
      selected.pop();
      visited[i] = false;
    }
  }
  dfs(arr, 0);
  return answer;
}

console.log(solution(4, 2));
