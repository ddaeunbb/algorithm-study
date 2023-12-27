// 경로 탐색 (인접리스트)

function solution(n, arr) {
  let answer = 0;
  let graph = Array.from({length: n+1}, () => Array());
  let tmp = Array.from({length: n+1}, () => 0);

  for(let [a, b] of arr){
    graph[a].push(b);
  }

  function DFS(v){
    if(v===n) answer++;
    else {
      for(let i = 0; i <= graph[v].length; i++){
        if(tmp[graph[v][i]]===0){
          tmp[graph[v][i]] = 1;
          DFS(graph[v][i]);
          tmp[graph[v][i]] = 0;
        }
      }
    }
  }

  tmp[1] = 1;
  DFS(1);
  return answer;
}


console.log(solution(5, [[1,2], [1,3], [1,4], [2,1], [2,3], [2,5], [3,4], [4,2], [4,5]]));
