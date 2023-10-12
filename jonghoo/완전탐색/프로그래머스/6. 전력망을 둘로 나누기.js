function solution(n, wires) {
  let answer = Infinity;

  function dfs(graph, start, visited) {
    visited[start] = true;
    let count = 1;

    for (let i = 0; i < graph[start].length; i++) {
      const neighbor = graph[start][i];
      if (!visited[neighbor]) {
        count += dfs(graph, neighbor, visited);
      }
    }

    return count;
  }

  for (let i = 0; i < n - 1; i++) {
    const graph = Array(n)
      .fill(null)
      .map(() => []);

    for (let j = 0; j < n - 1; j++) {
      if (i === j) continue;
      const [a, b] = wires[j];
      graph[a - 1].push(b - 1);
      graph[b - 1].push(a - 1);
    }

    console.log(graph);

    const visited = Array(n).fill(false);
    let count1 = 0;
    let count2 = 0;

    console.log(visited);

    for (let j = 0; j < n; j++) {
      if (!visited[j]) {
        if (count1 === 0) {
          count1 = dfs(graph, j, visited);
        } else {
          count2 = dfs(graph, j, visited);
        }
      }
    }

    const diff = Math.abs(count1 - count2);
    answer = Math.min(answer, diff);
  }

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
);
