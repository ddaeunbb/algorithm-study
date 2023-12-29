function solution(arr) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  function DFS(a, b) {
    if (a === 6 && b === 6) {
      answer++;
    } else {
      for (let k = 0; k < 4; k++) {
        let nx = a + dx[k];
        let ny = b + dy[k];
        if (nx >= 0 && ny <= 6 && ny >= 0 && nx <= 6 && arr[nx][ny] === 0) {
          arr[nx][ny] = 1;
          DFS(nx, ny);
          arr[nx][ny] = 0;
        }
      }
    }
  }
  arr[0][0] = 1;
  DFS(0, 0);
  return answer;
}

console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ])
);
