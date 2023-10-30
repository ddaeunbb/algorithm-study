function solution(n, m) {
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  let selected = [];
  let answer = [];
  console.log(arr);
  function dfs(arr, depth) {
    if (depth == m) {
      let result = [];
      for (let x of selected) result.push(arr[x]);
      answer.push(result);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      selected.push(i);
      dfs(arr, depth + 1);
      selected.pop();
    }
  }
  dfs(arr, 0);
  return answer;
}

console.log(solution(4, 2));
