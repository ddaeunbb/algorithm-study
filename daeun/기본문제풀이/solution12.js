// 12. 대문자로 통일
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요.

// 내가 푼 정답
function solution(string){
  return string.toUpperCase();
}

// 답안
// function solution(string){
//   let answer = '';

//   for(let spell of string){
//     let num = spell.charCodeAt();
//     if(num >= 97 && num <= 122) answer+=String.fromCharCode(num-32);
//     else answer+=spell;
//   }
//   return answer;
// }

console.log(solution('ItisTimeToStudy'));