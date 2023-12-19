function solution(m, arr) {
  let n = arr.length;
  let temp = Array.from({ length: n }, () => 0);
  let check = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L == m) {
      console.log(check);
    } else {
      for (let i = 0; i < n; i++) {
        if (temp[i] !== 1) {
          temp[i] = 1;
          check[L] = arr[i];
          DFS(L + 1);
          temp[i] = 0;
        }
      }
    }
  }
  DFS(0);
}

solution(2, [3, 6, 9]);
