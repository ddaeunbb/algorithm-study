function solution(n) {
  const answer = [];

  function DFS(L, ARR) {
    const share = Math.floor(L / 2);
    const rest = L % 2;
    if(share === 0) {
      ARR.push(rest);
      return; 
    }
    else {
      DFS(share, ARR);
      ARR.push(rest);
    }
  }

  DFS(n, answer);
  return answer.join('');
}

console.log(solution(11));