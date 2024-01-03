// function solution(n, results) {
//   let answer = [];
//   const board = Array.from({length: n+1}, () => []);
//   // 연결된 단방향 노드 생성하기
//   results.forEach(([a,b])=> board[a].push(b));

//   board.forEach((el,idx) => {
//     if(idx !== 0 && el.length === 0) answer.push(idx);
//   })

//   answer.forEach(el => {

//   })
// }

function BFS(graph, start) {
  const queue = [start];
  const visited = [];
  visited[start] = true;
  let result = 0;


  while(queue.length){
    const node = queue.shift();
    for(let nextNode of (graph[node] || [])) {
      if(visited[nextNode] !== true){
        visited[nextNode] = true;
        queue.push(nextNode);
        result++;
      }
    }
  }

  return result;
}

function solution(n, results) {
  var answer = 0;
  const winGraph = [];
  const loseGraph = [];

  results.forEach(([a,b]) => {
    if(winGraph[a]) winGraph[a].push(b);
    else winGraph[a] = [b];
    if(loseGraph[b]) loseGraph[b].push(a);
    else loseGraph[b] = [a];
  })

  console.log(winGraph);
  console.log(loseGraph);
  for(let i = 1; i <= n; i++){
    if(BFS(winGraph, i) + BFS(loseGraph, i) === n-1) answer++;
  }

  return answer;
}

console.log(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]])) // 2