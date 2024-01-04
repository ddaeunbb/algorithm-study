/* 가장 먼 노드
문제 설명
n개의 노드가 있는 그래프가 있습니다. 
각 노드는 1부터 n까지 번호가 적혀있습니다. 
1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 
가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.

노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 
1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.

제한사항
- 노드의 개수 n은 2 이상 20,000 이하입니다.
- 간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
- vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다. */

const solution = (n, edge) => {
  let answer = 0;
  let connects = new Array(n).fill().map(() => []);

  for (let e of edge) {
    // 양방향이니까 둘 다 넣어주기
    connects[e[0] - 1].push(e[1] - 1);
    connects[e[1] - 1].push(e[0] - 1);
  }

  //BFS
  let visited = [1];
  let queue = [0];

  while (queue.length) {
    // 이번에 살펴 볼 노드
    let cur = queue.shift();

    // cur 노드와 연결된 모든 노드(connects[cur]에 담긴 노드들)를 하나씩 살펴본다.
    for (let next of connects[cur]) {
      if (!visited[next]) {
        // 방문 안 했으면
        // 방문처리함과 동시에 그 값을 현재 deps + 1로 삽입
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    }
  }

  /* 위의 BFS를 모두 돌고나면 visited 배열에는 각 deps가 담겨있을 것이다. 
  각각의 값은 노드 1번으로부터 떨어져있는 거리를 의미한다. */

  // 가장 멀리 떨어진 노드가 얼마나 떨어져 있는지 구한다
  const max = Math.max(...visited);
  // max값이 visited 배열에 모두 몇개 있는지 구한다
  answer = visited.filter((el) => el === max).length;

  return answer;
};

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
); // 3
