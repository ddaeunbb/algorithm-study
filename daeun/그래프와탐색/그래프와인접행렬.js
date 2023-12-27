// 무방향 그래프
function solution(n, connection) {
  const graph = Array.from({length: n+1}, () => Array(n+1).fill(0));

  connection.forEach(([a,b])=> {
    graph[a][b] = 1;
    graph[b][a] = 1;
  })

  console.log(graph)
}

solution(5, [[1,2], [1,3], [2,4], [2,5], [3,4]]);

// 방향 그래프
function solution(n, connection) {
  const graph = Array.from({length: n+1}, () => Array(n+1).fill(0));

  connection.forEach(([a,b])=> {
    graph[a][b] = 1;
  })

  console.log(graph)
}

solution(5, [[1,2], [1,3], [3,4], [4,2], [2,5]]);