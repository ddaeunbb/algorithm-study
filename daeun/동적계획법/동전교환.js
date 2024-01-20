// DFS로 풀어보기
function solution(coins, money) {
  let answer = Number.MAX_SAFE_INTEGER;
  coins.sort((a,b)=> b-a);

  function DFS(totalMoney, count) {
    if(totalMoney === 0) answer = Math.min(answer, count);
    else {
      for(let i = 0; i < coins.length; i++){
        if(totalMoney % coins[i] === 0){
          DFS(totalMoney - coins[i], count + 1);
          break;
        }
      }
    }
  }

  DFS(money, 0);

  return answer;
}


function solution(coins, money) {
  let answer = 0;
  let dy = Array.from({length: money + 1}, () => 1000);
  dy[0] = 0;

  for(let i = 0; i < coins.length; i++){
    for(let j = coins[i]; j <= money; j++){
      dy[j] = Math.min(dy[j], dy[j - coins[i]] + 1);
    }
  }
  
  answer = dy[money];
  return answer;
}

console.log(solution([1,2,5], 15));