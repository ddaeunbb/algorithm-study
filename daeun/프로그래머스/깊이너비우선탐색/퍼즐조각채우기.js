// 블럭을 모두 초기 0,0에서 시작되게 하는 함수
function moveBlock(block) {
  // x좌표에서 가장 작은 값
  let minX = Math.min(...block.map(v => v[0]));
  // y좌표에서 가장 작은 값
  let minY = Math.min(...block.map(v => v[1]))

  // 좌표에서 가장 작은 값들을 빼고, 정렬하여 리턴한다.
  return block.map(v=> [v[0] - minX, v[1] - minY]).sort()
}

// 블록 회전하는 함수
function rotate(block) {
  // 모든 x와 y좌표 중에서 가장 큰 값
  let max = Math.max(...block.map(v => Math.max(v[0], v[1])));
  let rotateBlock = block.map(v=> [ max-v[1], v[0] ]);

  return moveBlock(rotateBlock);
}

function BFS(start, table, k){
  const dx = [0,0,1,-1];
  const dy = [1,-1,0,0];
  let needVisited = start;
  let block = [];

  while(needVisited.length > 0){
    let [cx, cy] = needVisited.shift();
    block.push([cx, cy]);

    for(let i = 0; i < 4; i++){
      let nx = cx + dx[i];
      let ny = cy + dy[i];

      if(nx >= 0 && nx < table.length && ny >= 0 && ny < table.length && table[nx][ny] !== k){
        needVisited.push([nx, ny]);
        table[nx][ny] = k;
      }
    }
  }

  return moveBlock(block);
}

function solution(game_board, table) {
  let answer = 0;
  let blanks = [];
  let blocks = [];

  for(let i = 0; i < game_board.length; i++){
    for(let j = 0; j < game_board.length; j++){
      if(game_board[i][j] === 0){
        game_board[i][j] = 1;
        blanks.push(BFS([[i,j]], game_board, 1));
      }
    }
  }

  for(let i = 0; i < table.length; i++){
    for(let j = 0; j < table.length; j++){
      if(table[i][j] === 1){
        table[i][j] = 0;
        blocks.push(BFS([[i,j]], table, 0))
      }
    }
  }

  blocks.forEach((val) => {
    // 공백인 블럭을 모두 탐색하며 같은지 확인한다.
    for(let i = 0; i < blanks.length; i++){
      let match = false;
      for(let j = 0; j < 4; j++){
        val = rotate(val);
        if(JSON.stringify(val) === JSON.stringify(blanks[i])) {
          blanks.splice(i, 1);
          answer += val.length;
          match = true;
          break;
        }
      }

      if(match) break;
    }
  })

  return answer;
}

console.log(solution(
  [[1,1,0,0,1,0],
  [0,0,1,0,1,0],
  [0,1,1,0,0,1],
  [1,1,0,1,1,1],
  [1,0,0,0,1,0],
  [0,1,1,1,0,0]],
  
  [[1,0,0,1,1,0],
  [1,0,1,0,1,0],
  [0,1,1,0,1,1],
  [0,0,1,0,0,0],
  [1,1,0,1,1,0],
  [0,1,0,0,0,0]]));

// https://velog.io/@nd098pkc/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%8D%BC%EC%A6%90-%EC%A1%B0%EA%B0%81-%EC%B1%84%EC%9A%B0%EA%B8%B0