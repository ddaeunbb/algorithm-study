/* 아이템 줍기
문제 내용: https://school.programmers.co.kr/learn/courses/30/lessons/87694
*/

const solution = (rectangle, characterX, characterY, itemX, itemY) => {
  // 가장 짧은 거리... BFS!

  // 1) 좌표를 2배로 늘린다.
  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;
  let dobuleRec = rectangle.map((rec) => rec.map((point) => point * 2));

  // 2) 위, 아래, 우측, 좌측 방향 설정
  const moveX = [1, -1, 0, 0];
  const moveY = [0, 0, 1, -1];

  // 3) 시작 위치를 최초의 큐에 담는다.
  const start = [characterX, characterY, 0];
  let que = [start];

  // 4) 움직일 수 있는 좌표를 2차원 배열로 정의하여 모두 0으로 채운다.
  // 제한사항이 50이 최대니, 51*2  넉넉하게 크기 103을 잡는다.
  let range = Array.from({ length: 103 }, () => Array(103).fill(0));

  // 5) 테두리는 1, 테두리의 내부는 2로 값을 변경한다.
  // (x1,y1) (x2,y2) 라는 직사각형 위 좌표 중 x는 x1 혹은 x2, y는 y1 혹은 y2라는 것은 즉, 그 자리는 테두리임을 의미한다.
  dobuleRec.forEach(([x1, y1, x2, y2]) => {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (i === x1 || i === x2 || j === y1 || j === y2) {
          if (range[i][j] === 0) range[i][j] = 1;
        } else {
          range[i][j] = 2;
        }
      }
    }
  });

  // 6) 시작 위치를 0으로 변경하여 다시 돌아가지 못하게 한다.
  range[characterX][characterY] = 0;

  // 7) 큐에 담긴 값이 없을 때(도착지점에 도착했을 때)까지 반복한다.
  while (que.length > 0) {
    // 8) 처음 값(shift)을 가져와 BFS 탐색을 한다.
    let [x, y, cnt] = que.shift();

    // 9) 현재 위치가 도착 위치에 도달하면 리턴한다.
    if (x === itemX && y === itemY) return cnt / 2;

    // 10) 도착하지 않았다면 움직일 수 있는( 1인 경우 ) 좌표 값, 횟수를 큐에 담는다.
    for (let i = 0; i < 4; i++) {
      let chX = x + moveX[i];
      let chY = y + moveY[i];
      if (range[chX][chY] === 1) {
        que.push([chX, chY, cnt + 1]);
        range[chX][chY] = 0;
      }
    }
  }
  return 0;
};

console.log(
  solution(
    [
      [1, 1, 7, 4],
      [3, 2, 5, 5],
      [4, 3, 6, 9],
      [2, 6, 8, 8],
    ],
    1,
    3,
    7,
    8
  )
); // 17
