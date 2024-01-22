// DFS를 사용한 내 풀이
function solution(n) {
  let answer = 0;

  function DFS(cur) {
    if(cur > n) return;
    if(cur === n) answer++;
    else {
      DFS(cur+1);
      DFS(cur+2);
    }
  }

  DFS(0);

  return answer;
}

// 강사님 풀이
function solution(n) {
  let answer = 0;
  let dy = Array.from({length: n+1}, () => 0);
  dy[1] = 1;
  dy[2] = 2;

  for(let i = 3; i <= n; i++){
    dy[i] = dy[i-1] + dy[i-2];
  }
  answer = dy[n];
  return answer;
}


console.log(solution(7)) // 21