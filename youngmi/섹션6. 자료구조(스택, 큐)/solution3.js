/* 크레인 인형뽑기 게임 
자세한 문제 설명: https://school.programmers.co.kr/learn/courses/30/lessons/64061
*/

const solution = (board, moves) => {
  let answer = 0;
  let pickList = [];

  for (let i = 0; i < moves.length; i++) {
    // 이번에 뽑을 열
    const col = moves[i] - 1;
    let row = 0;

    if (pickList.length === 0) {
      // 만약 뽑은 목록에 아무것도 없으면
      for (let j = 0; j < board.length; j++) {
        if (board[row][col] === 0) {
          // 새롭게 뽑으려는 아이템이 0이면(인형이 더 깊게 있으면) row 증가
          row++;
        } else {
          // 아이템 보이면 pickList에 넣고 그 자리는 0으로 변경
          pickList.push(board[row][col]);
          board[row][col] = 0;
          break;
        }
      }
    } else {
      // 뽑은 목록 차 있으면 비교
      for (let j = 0; j < board.length; j++) {
        if (board[row][col] === 0) {
          // 새롭게 뽑으려는 아이템이 0이면(인형이 더 깊게 있으면) row 증가
          row++;
        } else {
          if (pickList[pickList.length - 1] === board[row][col]) {
            // 새로 뽑은 인형이 가장 마지막에 뽑았던 인형과 같을 경우 = 팡!
            answer += 2;
            pickList.pop();
            board[row][col] = 0;
          } else {
            // 같지 않으면 계속 쌓아 주고 새로 뽑은 자리는 0으로 비워줌
            pickList.push(board[row][col]);
            board[row][col] = 0;
          }
          break;
        }
      }
    }
  }

  return answer;
};

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves)); // 4
