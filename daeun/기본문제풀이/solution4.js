
// 4. 세 수 중 최솟값
// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

// 내가 푼 답안
function solution(n){
  return (n * (n+1)) / 2
}

// 답안
// function solution(n){
//   let answer = 1;
//   for(let i = 2; i <= n; i++){
//     answer += i;
//   }
//   return answer;
// }

console.log(solution(6));
console.log(solution(10));
