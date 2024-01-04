function solution(n, result) {
  let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
  result.map((val) => {
    const [winner, loser] = val;
    graph[winner][loser] = 1;
    graph[loser][winner] = -1;
    graph[winner][winner] = 0;
    graph[loser][loser] = 0;
  });

  const rangeN = [...Array(n).keys()].map((e) => e + 1);
  for (const mid of rangeN) {
    for (const a of rangeN) {
      for (const b of rangeN) {
        if (graph[a][mid] === 1 && graph[mid][b] === 1) graph[a][b] = 1;
        if (graph[a][mid] == -1 && graph[mid][b] == -1) graph[a][b] = -1;
      }
    }
  }
  let ans = 0;
  for (const self of rangeN) {
    let hasFalse = false;
    for (const other of rangeN) {
      if (graph[self][other] === false) {
        hasFalse = true;
        break;
      }
    }
    ans += hasFalse ? 0 : 1;
  }
  return ans;
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
