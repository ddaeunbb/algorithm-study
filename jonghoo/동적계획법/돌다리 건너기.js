function solution(n) {
  let count = 0;
  function DFS(L) {
    if (L === n + 1) count++;
    if (L > n + 1) return;
    else {
      DFS(L + 1);
      DFS(L + 2);
    }
  }
  DFS(0);
  return count;
}

console.log(solution(7));
