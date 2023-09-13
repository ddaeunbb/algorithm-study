// 3. 가위바위보
// A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다. 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
// 예를 들어 N=5이면 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램 을 작성하세요.

// 내가 푼 답안
// [2,3,3,1,3],[1,1,2,2,3]
function solution(a,b){
  const answer = [];
  let length = a.length;
  for(let i = 0; i < length; i++){
    if(a[i] < b[i]) {
      b[i] - a[i] === 2 ? answer.push('A') : answer.push('B');
    }
    else if(a[i] > b[i]){
      a[i] - b[i] === 2 ? answer.push('B') : answer.push('A');
    }
    else answer.push('D');
  }
  return answer;
}

// 정답
// function solution(a, b){         
//   let answer="";
//   for(let i=0; i<a.length; i++){
//       if(a[i]===b[i]) answer+="D ";
//       else if(a[i]===1 && b[i]===3) answer+="A ";
//       else if(a[i]===2 && b[i]===1) answer+="A ";
//       else if(a[i]===3 && b[i]===2) answer+="A ";
//       else answer+="B ";
//   }
//   return answer;
// }


console.log(solution([2,3,3,1,3],[1,1,2,2,3]));