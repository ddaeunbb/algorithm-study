/* 게임 맵 최단거리
ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임입니다. 
따라서, 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리합니다. 

게임 맵의 상태 maps가 매개변수로 주어질 때, 
캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값을 return 하도록 solution 함수를 완성해주세요. 
단, 상대 팀 진영에 도착할 수 없을 때는 -1을 return 해주세요.

제한사항
- maps는 n x m 크기의 게임 맵의 상태가 들어있는 2차원 배열로, n과 m은 각각 1 이상 100 이하의 자연수입니다.
- n과 m은 서로 같을 수도, 다를 수도 있지만, n과 m이 모두 1인 경우는 입력으로 주어지지 않습니다.
- maps는 0과 1로만 이루어져 있으며, 0은 벽이 있는 자리, 1은 벽이 없는 자리를 나타냅니다.
- 처음에 캐릭터는 게임 맵의 좌측 상단인 (1, 1) 위치에 있으며, 상대방 진영은 게임 맵의 우측 하단인 (n, m) 위치에 있습니다.
*/

//DFS 풀이.. 효율성 테스트 탈락... BFS로 풀자
const solutionDFS = (maps) => {
  let answer = 30;

  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];
  let count = 1;

  const dfs = (x, y) => {
    // dfs 들어오자 마자 우선 상대 진영 도착했는지 확인
    if (x === maps.length - 1 && y === maps[0].length - 1) {
      console.log("도착", x, y, answer, count);
      if (count < answer) {
        answer = count;
      }
    } else {
      // 4방향 확인하면서 통로면 전진하기
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (
          nx <= maps.length - 1 &&
          nx >= 0 &&
          ny <= maps[0].length - 1 &&
          ny >= 0 &&
          maps[nx][ny] === 1
        ) {
          // 다음 x, y 좌표가 맵을 넘어가지 않고 1 즉, 통로일 때
          // 방문한 곳 기록 (벽과 동일 취급)
          maps[x][y] = 0;
          count++;
          dfs(nx, ny);
          // dfs 나오면 다시 뒤로 이동한 거니까 자리 다시 통로로 바꾸고 count -1 해주기
          maps[nx][ny] = 1;
          count--;
        }
      }
    }
  };

  maps[0][0] = 0;
  dfs(0, 0);

  return answer === 30 ? -1 : answer;
};

const solutionBFS = (maps) => {
  let answer = 1;
  let visited = maps;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const n = maps.length;
  const m = maps[0].length;

  let queue = [];
  queue.push([0, 0]);
  visited[0][0] = 0;

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
          if (nx == n - 1 && ny == m - 1) {
            return ++answer;
          }
          queue.push([nx, ny]);
          visited[nx][ny] = 0;
        }
      }
    }
    answer++;
  }

  return -1;
};

console.log(
  solutionBFS([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
); // 11
