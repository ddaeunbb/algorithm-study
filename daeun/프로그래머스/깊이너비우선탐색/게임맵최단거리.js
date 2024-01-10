function solution(maps) {
  let visited = maps;
  const queue = [];

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];

  let n = maps.length;
  let m = maps[0].length;

  // bfs를 돌기전 작업
  queue.push([0, 0, 1]);
  visited[0][0] = 0;

  while(queue.length){
    const [x, y, move] = queue.shift();
    
    for(let i = 0; i < 4; i++){
      let nx = x + dx[i];
      let ny = y + dy[i];

      if(nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1){
        if(nx === n -1 && ny === m -1) return move + 1;
        visited[nx][ny] = 0;
        queue.push([nx, ny, move + 1]);
      }
    }
  }

  return -1;
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]));