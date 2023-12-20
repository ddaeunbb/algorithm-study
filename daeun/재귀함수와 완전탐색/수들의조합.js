function solution(n, k, m) {
  let answer = 0;

  function DFS(L, s, sum) {
    if(L === k) {
      if(sum % m === 0) answer++;
    }
    else {
      for(let i = s; i < n.length; i++){
        DFS(L+1, i+1, sum + n[i]);
      }
    }
  }
  DFS(0,0,0)
  return answer
}

console.log(solution([2, 4, 5, 8, 12], 3, 6));