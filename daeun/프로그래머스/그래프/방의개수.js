// 다시 지나가는 점을 카운트하면 된다고 생각했는데, 같은 길을 똑같이 간다했을 때도 카운트 되는 경우 존재
function solution(arrows) {
  let answer = 0;
  let graph = new Map();
  const move = [[0, -1], [-1, 1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]];
  let cur = [0, 0];

  graph.set('0,0', 1);

  arrows.forEach(dir => {
    cur[0] = cur[0] + move[dir][0];
    cur[1] = cur[1] + move[dir][1];

    if(graph.has(`${cur[0]},${cur[1]}`)) {
      graph.set(`${cur[0]},${cur[1]}`, graph.get(`${cur[0]},${cur[1]}`) + 1);
      answer++;
    }
    else graph.set(`${cur[0]},${cur[1]}`, 1);
  })

  return answer
}


// 다른 풀이
function solution(arrows) {
  let answer = 0;
  let pos = {};
  let dir = {};

  // 움직이는 방향
  let dx = [0, 1, 1, 1, 0, -1, -1, -1];
  let dy = [1, 1, 0, -1, -1, -1, 0, 1];

  // 현재방향
  let x = 0; let y = 0;
  // 먼저 현재 방향을 방문했음을 객체에 기록한다. ('0,0'): 1
  pos[MakePos(x,y)] = 1;

  arrows.forEach(el => {
      for(let i = 0; i < 2; i++) {
          let nx = x + dx[el];
          let ny = y + dy[el];

          // 만약 방문한적이 있다면
          if(pos[MakePos(nx,ny)]) {
            // 서로 같은 방향으로 간적 없는지 확인후, 없다면 그때 도형이 생겼다고 판단 후 더한다.
              if(!dir[MakePos(x,y) + ',' + MakePos(nx,ny)] || !dir[MakePos(nx,ny) + ',' + MakePos(x,y)]) {
                  answer++;
              }
          }

          // 한번도 방문한적 없는 경로라면 체크작업
          // dir에 서로 양방향으로 이어져있음을 기록한다.
          pos[MakePos(nx,ny)] = 1;
          dir[MakePos(x,y) + ',' + MakePos(nx,ny)] = 1;
          dir[MakePos(nx,ny) + ',' + MakePos(x,y)] = 1;

          x = nx; y = ny;
      }
  });

  return answer;
}

const MakePos = (x,y) => {
  return String(x) + ',' + String(y);
}

console.log(solution([6, 6, 6, 4, 4, 4, 2, 2, 2, 0, 0, 0, 1, 6, 5, 5, 3, 6, 0])) // 3