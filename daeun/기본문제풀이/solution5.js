// 5. 최솟값 구하기
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.


// 내가 푼 답안
function solution(arr){
  return Math.min(...arr)
}

// 답안
// function solution(arr){
//   let answer = Number.MAX_SAFE_INTEGER;
//   for(el of arr){
//     if(answer > el) answer = el;
//   }
//   return answer;
// }

console.log(solution([5,3,7,11,2,15,17]));
