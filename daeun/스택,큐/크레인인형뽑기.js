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