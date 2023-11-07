// 3. 크레인 인형뽑기
function solution(board, moves) {
  const stack = [];
  let answer = 0;
  
  for(let move of moves){
      for(let el of board){
          const doll = el[move-1]
          if(doll > 0){
              stack.push(doll)
              el[move-1] = 0;
              break;
          }
      }
      
      while(stack[stack.length-1] === stack[stack.length-2]){
          stack.pop();
          stack.pop();
          answer += 2;
      }
  }
  return answer
}
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,2,5,0,0],
// [0,2,4,4,2],
// [3,5,1,3,1]]

// [1,5,3,5,1,2,1,4]

// 
function solution(board, moves) {
  const stack = [];
  let answer = 0;
  for(let move of moves){
      let already = false;
      board.forEach((line, idx)=> {
          if(!already && line[move-1] > 0){
              stack.push(line[move-1]);
              if(stack[stack.length-1] === stack[stack.length-2]){
                  stack.pop();
                  stack.pop();
                  answer +=2;
              }
              board[idx][move-1] = 0;
              already = true;
          }
      })
  }
  return answer
}