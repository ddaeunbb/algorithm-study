// 경로 탐색 (인접행렬)

// 1. 노드를 내려가면서 방문한 곳을 체크한다.
// 2. 재귀형태로 탐색하는데, 마지막 노드가 정점 n으로 오는 순간 끝나게 된다.
function solution(n, arr) {
  let answer = 0;
  let graph = Array.from({length: n+1}, () => Array(n+1).fill(0));
  let tmp = Array.from({length: n+1}, () => 0);

  for(let [a,b] of arr) {
    graph[a][b] = 1;
  }

  function DFS(L) {
    if(L === n) answer++;
    else {
      for(let i = 1; i <= n; i++){
        if(graph[L][i] === 1 && tmp[i] === 0){
          tmp[i] = 1;
          DFS(i);
          tmp[i] = 0;
        }
      }
    }
  }

  tmp[1] = 1;
  DFS(1);
  return answer;
}


console.log(solution(5, [[1,2], [1,3], [1,4], [2,1], [2,3], [2,5], [3,4], [4,2], [4,5]]));
