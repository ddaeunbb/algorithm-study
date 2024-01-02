function solution(n, edge) {
  let queue = [];
  let board = Array.from({length: n+1}, () => []);
  let ch = Array.from({length: n+1}, () => 0);
  let dis = Array.from({length: n+1}, () => 0);
  
  // 방문한 노드 만들기
  edge.forEach(([a,b]) => {
    board[a].push(b);
    board[b].push(a);
  })

  queue.push(1);
  ch[1] = 1;
  dis[1] = 1;

  // 각각 방문한 레벨 표시
  while(queue.length){
    const node = queue.shift();
    for(let i = 0; i < board[node].length; i++){
      let connectNode = board[node][i];
      if(ch[connectNode] === 0){
        ch[connectNode] = 1;
        dis[connectNode] = dis[node] + 1;
        queue.push(connectNode);
      }
    }
  }

  let max = Math.max(...dis);
  return dis.filter(el => el === max).length;
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])); // 3