/* 안전 지대 
지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.
*/
const solution = (board) => {
  let answer = 0;
  let n = board.length;

  // 좌, 좌하, 하, 우하, 우, 우상, 상, 좌상 방향 배열
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let safe = 1;
      if (board[i][j] === 1) {
        // 해당 자리가 지뢰일 때
        safe = 0;
      } else {
        // 해당 자리가 지뢰가 아닐 때
        // 주위 자리를 확인
        for (let k = 0; k < 8; k++) {
          let x = i + dx[k];
          let y = j + dy[k];
          if (x >= 0 && x < n && y >= 0 && y < n && board[x][y] === 1) {
            // 총 9개의 주위 좌표 중 한 개라도 지뢰 있다면 safe 0으로 바꾼 뒤 break;
            safe = 0;
            break;
          }
        }
      }

      if (safe === 1) {
        // 해당 자리도, 주위에도 지뢰 없다면 answer 카운트
        answer++;
      }
    }
  }

  return answer;
};

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // 16
