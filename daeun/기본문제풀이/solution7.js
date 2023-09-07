// 7. 10부제
// 서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다. 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하 지 못한다. 또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한다. 여러분들은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고 한다. 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.

// 내가 푼 답안
function solution(day, arr){
  let count = 0;
  
  for(car of arr){
    if(String(car)[1] === day.toString()) count++;
  }
  return count;
}

// 답안
// function solution(day, arr){
//   let count = 0;
  
//   for(car of arr){
//     if(car % 10 === day) count++;
//   }
//   return count;
// }

console.log(solution(3,[25,23,11,47,53,17,33]))
console.log(solution(0,[12,20,54,30,87,91,30]))