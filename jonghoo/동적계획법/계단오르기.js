function solution(n) {
  let count = 0;
  function DFS(L) {
    if (L === n) count++;
    if (L > n) return;
    else {
      DFS(L + 1);
      DFS(L + 2);
    }
  }
  DFS(0);
  return count;
}

console.log(solution(7));
