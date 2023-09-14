// Lv.0 안전지대

function solution(board){
  const dx = [-1,-1,-1,0,1,1,1,0];
  const dy = [-1,0,1,1,1,0,-1,-1];
  const length = board.length;

  let copyBoard = JSON.parse(JSON.stringify(board));
  
  for(let i = 0; i< length; i++){
    for(let j = 0; j < length; j++){
      if(board[i][j] === 1){
        for(let k = 0; k < dx.length; k++){
          let x = i + dx[k];
          let y = j + dy[k];
          if(x >= length || x < 0 || y >= length || y < 0) continue;
          copyBoard[x][y] = 1;
        }
      }
    }
  }

  let count = 0;

  copyBoard.forEach(area => {
    for(let el of area){
      if(el === 0) count++;
    }
  })

  return count;
}

console.log(solution([[0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                      [0, 0, 1, 0, 0],
                      [0, 0, 0, 0, 0]]));