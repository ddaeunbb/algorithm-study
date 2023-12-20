function solution(coins, m) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = coins.length;

  function DFS(L, sum) {
    if( sum > m) return;
    if(L > answer) return;
    if(sum === m) answer = Math.min(answer, L);
    else  {
      for(let i = 0; i < n; i++) {
        DFS(L+1, sum + coins[i]);
      }
    }
  }
}


function solution(coins, m) {
  const answer = [];

  function DFS(L, sum){
    if (sum > m) return
    if(sum === m) {
      return answer.push(L)
    }
    else{
      for(let i = 0; i < coins.length; i++) {
        DFS(L+1, sum + coins[i]);
      }
    }
  }
  DFS(0, 0);

  return Math.min(...answer);
}

console.log(solution([1,2,5], 15));