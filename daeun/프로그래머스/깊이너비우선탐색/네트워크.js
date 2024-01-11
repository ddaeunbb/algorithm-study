function solution(n, computers) {
  let answer = 0;
  let board = Array.from({length: n}, () => []);
  let ch = Array.from({length: n}, () => 0);

  computers.forEach((el, idx)=> {
    el.forEach((each, node) => each === 1 && idx !== node &&board[idx].push(node));
  })

  function DFS(node) {
    if(ch[node]) return
    else {
      ch[node] = 1;
      for(let i = 0; i < board[node].length; i++){
        DFS(board[node][i]);
      }
    }
  }

  for(let i = 0; i < n; i++){
    if(!ch[i]) {
      DFS(i);
      answer++;
    }
  }
  return answer;
}

// function solution(n, computers) {
//   let answer = 0, visited=Array(n).fill(false)

// for(let i=0;i<n;i++){
//  if(!visited[i]){
//  dfs(i)
//  answer++
//  }
// }

// function dfs(i){
// visited[i]=true
// for(let j=0;j<n;j++){
// if(computers[i][j]===1&& !visited[j])
//  dfs(j)
// } 
// }

//   return answer
// }

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]));