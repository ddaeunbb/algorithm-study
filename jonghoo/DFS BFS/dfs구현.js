function dfs(graph, v, visited) {
  visited[v] = true;
  console.log(v);
  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}
