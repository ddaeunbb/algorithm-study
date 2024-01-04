/* 섬나라 아일랜드(DFS 활용)
N*N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어집니다. 각 섬은 1로 표시되어 상하좌
우와 대각선으로 연결되어 있으며, 0은 바다입니다. 섬나라 아일랜드에 몇 개의 섬이 있는지
구하는 프로그램을 작성하세요.
 */

const solution = (board) => {
  let answer = 0;
  let n = board.length;
  // 대각선 포함한 8방향 좌표 배열
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  const dfs = (x, y) => {
    // 방문했으면 x, y 좌표 0으로 설정
    board[x][y] = 0;
    for (let k = 0; k < 8; k++) {
      // 8가지 방향 좌표로 nx, ny 정의
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
        // nx와 ny가 0보다 크고 좌표의 길이를 넘어가지 않을 때, board의 [nx][ny] 좌표의 값이 1이면
        dfs(nx, ny);
      }
    }
  };

  // 0부터 board 길이를 넘기지 않을 때 까지의 x, y좌표에 대해 이중 for문으로 dfs 시작
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 해당 자리가 1이면 dfs
      if (board[i][j] === 1) {
        board[i][j] = 0;
        answer++;

        dfs(i, j);
      }
    }
  }

  return answer;
};

const solutionBfs = (board) => {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  let queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        queue.push([i, j]);
        answer++;

        while (queue.length) {
          let x = queue.shift();
          for (let k = 0; k < 8; k++) {
            let nx = x[0] + dx[k];
            let ny = x[1] + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }
  return answer;
};

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
