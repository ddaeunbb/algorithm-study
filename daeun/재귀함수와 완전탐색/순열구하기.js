function solution(num, m) {
  let answer = [];
  let n = num.length;
  let ch = Array.from({length: n}, () => 0);
  let tmp = Array.from({length: m}, () => 0);

  function DFS(L) {
    if(L === m) {
      answer.push(tmp.slice());
    }
    else {
      for(let i = 0; i < num.length; i++) {
        if(ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = num[i];
          DFS(L+1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0)

  return answer
}

console.log(solution([3,6,9], 2));