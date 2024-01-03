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

function BFS(graph, start){
  const queue = [start];
  let result = 0;
  const visited = [];
  visited[start] = true;

  // 큐가 빌 때까지, 노드를 계속 타고간다. 타면서 노드를 탄 개수를 카운트한다.
  // 방문한 노드는 재방문하지 않는다.
  while(queue.length){
    const node = queue.shift();
    for(nextNode of (graph[node] || [])){
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

  // 이긴 그래프와, 진 그래프를 각각 만든다.
  // 이긴 그래프 = [ _, [2], [5], [2], [2,3], _ ];
  // 진 그래프 = [ _, _, [1, 3, 4], [4], _, [2] ];
  results.forEach(([a,b]) => {
    if(winGraph[a]) winGraph[a].push(b);
    else winGraph[a] = [b];
    if(loseGraph[b]) loseGraph[b].push(a);
    else loseGraph[b] = [a];
  })

  // 이긴 그래프를 타고간 노드의 개수 + 진 그래프를 타고 간 노드의 개수 = n - 1 인 경우만 승리의 예측이 가능하다.
  for(let i = 1; i <= n; i++){
    if(BFS(winGraph, i) + BFS(loseGraph, i) === n -1) answer++;
  }

  return answer;
}

console.log(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]])) // 2