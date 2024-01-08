function solution(n, vertex) {
  let graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of vertex) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const distance = Array(n + 1).fill(0);
  distance[1] = true;
  let queue = [];
  queue.push(1);
  while (queue.length) {
    let x = queue.shift();
    for (let node of graph[x]) {
      if (!distance[node]) {
        distance[node] = distance[x] + 1;
        queue.push(node);
      }
    }
  }
  const max = Math.max(...distance);
  console.log(distance);
  return distance.filter((e) => e == max).length;
}

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
);
