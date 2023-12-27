function solution(n, m) {
  let temp = Array.from({ length: m }, () => 0);

  function DFS(L, start) {
    if (L == m) {
      console.log(temp);
    } else {
      for (let i = start; i <= n; i++) {
        temp[L] = i;

        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 1);
}

solution(4, 2);
