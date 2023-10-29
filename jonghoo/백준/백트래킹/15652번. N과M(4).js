function solution(n, m) {
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  let selected = [];
  let answer = [];

  function dfs(arr, depth, start) {
    if (depth == m) {
      let result = [];
      for (x of selected) result.push(arr[x]);
      answer.push(result);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      selected.push(i);
      dfs(arr, depth + 1, i);
      selected.pop();
    }
  }
  dfs(arr, 0, 0);
  return answer;
}

console.log(solution(4, 2));
