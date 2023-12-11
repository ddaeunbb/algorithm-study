function solution(arr){
  let answer = "NO"
  let ch  = Array.from({length: arr.length}, () => 0);

  function DFS(v){
    if(v === arr.length){
      let pick = 0;
      let rest = 0;
      for(let i = 0; i < ch.length; i++){
        if(ch[i] === 0) rest += arr[i];
        else pick += arr[i];
      }
      if(pick === rest) answer = 'YES';
    }
    else {
      ch[v] = 1;
      DFS(v+1);
      if(v !== 0){
        ch[v] = 0;
        DFS(v+1);
      }
    }
  }

  DFS(0);
  return answer;
}


function solution(arr) {
  let answer = "NO", flag = 0;
  let total = arr.reduce((acc, cur) => acc + cur, 0);
  let n = arr.length;

  function DFS(L, sum){
    if(flag === 1) return;
    if(L === n){
      if((total - sum) === sum){
        answer = "YES"
        flag = 1;
      }
    }
    else {
      DFS(L+1, sum + arr[L]);
      DFS(L+1, sum);
    }
  }
}

console.log(solution([1, 3, 5, 6, 7, 10]));