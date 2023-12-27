function solution(n, arr) {
  let answer = 0;
  let array = Array.from({ length: n + 1 }, () => []);
  let check = Array.from({ length: n + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    array[arr[i][0]].push(arr[i][1]);
  }
  function DFS(L) {
    if (L == n) answer++;
    else {
      check[1] = 1;
      for (let i = 1; i <= n; i++) {
        if (array[L].includes(i) && check[i] == 0) {
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

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
