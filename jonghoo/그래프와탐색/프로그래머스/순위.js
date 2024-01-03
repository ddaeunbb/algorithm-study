function solution(n, result) {
  let graph = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < result.length; i++) {
    graph[result[i][0]].push(result[i][1]);
  }
  console.log(graph);
}

//순위를 매길떄 배열을생각해보자
// 4, 3 , 1, 2 ,5
//2,5
console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
);
