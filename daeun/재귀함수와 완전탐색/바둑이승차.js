function solution(truck, weights) {
  let arr = [];
  let ch = Array.from({length: weights.length}, () => 0);
  let total = 0;

  function DFS(v){
    if(v === ch.length){
      let sum = 0;
      for(let i = 0; i < ch.length; i++){
        if(ch[i] === 1) sum += weights[i];
      }
      if(sum <= 259) arr.push(sum)
    }
    else {
      if(total += weights[v] <= truck){
        ch[v] = 1;
        total += weights[v];
        DFS(v+1);
      } else return;
      
      ch[v] = 0;
      total -= weights[v];
      DFS(v+1);
    }
  }

  DFS(0);
  console.log(arr);
  return Math.max(...arr);
}


function solution(c, arr){
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum){
    if(sum > c) return;
    if(L === n){
      answer = Math.max(answer, sum);
    }
    else {
      DFS(L+1, sum + arr[L]);
      DFS(L+1, sum);
    }
  }
  
  DFS(0,0);
  return answer;
}

console.log(solution(259, [81,58,42,33,61]));