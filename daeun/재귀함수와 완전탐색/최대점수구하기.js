function solution(limit, problems) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(L, score, time){
    if(time > limit) return;
    if(L === problems.length){
      answer = Math.max(answer, score);
      return;
    }
    else {
      console.log(L , problems[L][0], problems[L][1])
      DFS(L+1, score + problems[L][0], time + problems[L][1]);
      DFS(L+1, score, time);
    }
  }

  DFS(0, 0, 0);
  return answer;
}

console.log(solution(20, [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]]));