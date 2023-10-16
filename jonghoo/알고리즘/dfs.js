function DFS(graph, v, visited) {
  visited[v] = true;
  console.log(v);
  for (i of graph[v]) {
    if (!visited[i]) {
      DFS(graph, i, visited);
    }
  }
}

let arr = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];
let visit = Array(9).fill(false);

DFS(arr, 1, visit);
