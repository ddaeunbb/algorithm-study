// dfs로 푼 풀이
function solution(n) {
  let answer = 0;

  function DFS(count) {
    if(count >= n) answer++;
    else {
      DFS(count+1);
      DFS(count+2);
    }
  }

  DFS(0);

  return answer;
}

// 강사님 풀이
function solution(n) {
  let answer = 0;
  let dy = Array.from({length: n+2}, () => 0);
  dy[1] = 1;
  dy[2] = 2;

  for(let i = 3; i <= n+1; i++){
    dy[i] = dy[i-1] + dy[i-2];
  }

  answer = dy[n+1];

  return answer;
}

console.log(solution(7)) // 34