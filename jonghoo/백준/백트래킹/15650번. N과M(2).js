function checkOrder(arr) {
  let newarr = [...arr];
  newarr.sort((a, b) => a - b);
  let answer = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == newarr[i]) continue;
    else return false;
  }
  return true;
}

console.log(checkOrder([2, 1, 3]));

function solution(N, M) {
  let arr = [];
  for (let i = 1; i <= N; i++) arr.push(i);
  let visited = new Array(N).fill(false);
  let selected = [];
  let answer = [];
  function dfs(arr, depth) {
    if (depth == M) {
      let result = [];
      for (x of selected) result.push(arr[x]);
      if (checkOrder(result)) {
        answer.push(result);
      }
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
