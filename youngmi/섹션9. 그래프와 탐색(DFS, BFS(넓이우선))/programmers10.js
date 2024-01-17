/* 퍼즐 조각 채우기
문제 설명
테이블 위에 놓인 퍼즐 조각을 게임 보드의 빈 공간에 적절히 올려놓으려 합니다. 
게임 보드와 테이블은 모두 각 칸이 1x1 크기인 정사각 격자 모양입니다. 
이때, 다음 규칙에 따라 테이블 위에 놓인 퍼즐 조각을 게임 보드의 빈칸에 채우면 됩니다.

- 조각은 한 번에 하나씩 채워 넣습니다.
- 조각을 회전시킬 수 있습니다.
- 조각을 뒤집을 수는 없습니다.
- 게임 보드에 새로 채워 넣은 퍼즐 조각과 인접한 칸이 비어있으면 안 됩니다. 

현재 게임 보드의 상태 game_board, 테이블 위에 놓인 퍼즐 조각의 상태 table이 매개변수로 주어집니다. 
규칙에 맞게 최대한 많은 퍼즐 조각을 채워 넣을 경우, 총 몇 칸을 채울 수 있는지 return 하도록 solution 함수를 완성해주세요.

자세한 문제 설명: https://school.programmers.co.kr/learn/courses/30/lessons/84021
*/

const solution = (game_board, table) => {
  let minX = Math.min(...block.map((v) => v[0]));
  let minY = Math.min(...block.map((v) => v[1]));

  return block.map((v) => [v[0] - minX, v[1] - minY]).sort();
};

function rotate(block) {
  let max = Math.max(...block.map((v) => Math.max(v[0], v[1])));
  let rotateBlock = block.map((v) => [max - v[1], v[0]]);

  return moveBlock(rotateBlock);
}

function bfs(start, table, k) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let needVisit = start;
  let block = [];
  while (needVisit.length > 0) {
    let [cx, cy] = needVisit.shift();
    block.push([cx, cy]);
    for (let i = 0; i < 4; i++) {
      let nx = cx + dx[i];
      let ny = cy + dy[i];

      if (nx < 0 || ny < 0 || nx >= table.length || ny >= table.length)
        continue;
      else if (table[nx][ny] === k) continue;
      else {
        needVisit.push([nx, ny]);
        table[nx][ny] = k;
      }
    }
  }
  return moveBlock(block);
}

function solution(game_board, table) {
  let blanks = [];
  let blocks = [];
  for (let i = 0; i < game_board.length; i++) {
    for (let j = 0; j < game_board.length; j++) {
      if (game_board[i][j] === 0) {
        game_board[i][j] = 1;
        blanks.push(bfs([[i, j]], game_board, 1));
      }
    }
  }
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table.length; j++) {
      if (table[i][j] === 1) {
        table[i][j] = 0;
        blocks.push(bfs([[i, j]], table, 0));
      }
    }
  }
  let answer = 0;
  blocks.forEach((val) => {
    for (let i = 0; i < blanks.length; i++) {
      let match = false;
      for (let j = 0; j < 4; j++) {
        val = rotate(val);
        if (JSON.stringify(val) === JSON.stringify(blanks[i])) {
          blanks.splice(i, 1);
          answer += val.length;
          match = true;
          break;
        }
      }
      if (match) break;
    }
  });
  return answer;
}
console.log(
  solution(
    [
      [1, 1, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0],
      [0, 1, 1, 0, 0, 1],
      [1, 1, 0, 1, 1, 1],
      [1, 0, 0, 0, 1, 0],
      [0, 1, 1, 1, 0, 0],
    ],
    [
      [1, 0, 0, 1, 1, 0],
      [1, 0, 1, 0, 1, 0],
      [0, 1, 1, 0, 1, 1],
      [0, 0, 1, 0, 0, 0],
      [1, 1, 0, 1, 1, 0],
      [0, 1, 0, 0, 0, 0],
    ]
  )
); // 14
