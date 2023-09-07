// 10. 문자찾기
// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요. 문자열의 길이는 100을 넘지 않습니다.

// 내가 푼 답안
function solution(string, spell){
  let count = 0;
  for(let el of string){
    if(el === spell) count++;
  }
  return count;
}

// 정답
// function solution(string, spell){
//   let answer = string.split(spell);
//   return answer.length - 1;
// }

console.log(solution('COMPUTERPROGRAMMING','R'))