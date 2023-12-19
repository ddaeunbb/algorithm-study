function solution(n) {
  let answer;
  function DFS(n) {
    if(n===1) return 1;
    else return n * DFS(n-1);
  }
  answer = DFS(n);
  return  answer;
}

function solution(n) {
  let answer = 1;

  function DFS(L, num) {
    if(L === n) return answer = num * L;
    else {
      DFS(L+1, num * L);
    }
  }
  DFS(1, 1);
  return answer
}

console.log(solution(5));