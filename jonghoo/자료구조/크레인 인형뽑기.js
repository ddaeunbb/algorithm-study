function solution(board, moves) {
  let N = board.length;
  let stack = [];
  let count = 0;
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < N; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        stack.push(board[j][moves[i] - 1]);
        if (stack[stack.length - 1] == stack[stack.length - 2]) {
          count++;
          count++;
          stack.pop();
          stack.pop();
        }
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return count;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
