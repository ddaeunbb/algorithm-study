function solution(n, m) {
  let tmp = Array.from({ length: m }, () => 0);
  let answer = 0;

  function DFS(L) {
    if (L == m) {
      console.log(tmp);
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);
  console.log(answer);
}

solution(3, 2);
