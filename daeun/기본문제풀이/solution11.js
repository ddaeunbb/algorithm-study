// 11. 대문자 찾기
// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.

// 내가 푼 답안
function solution(string){
  let word = string.split('');
  let count = 0;
  for(let spell of word){
    if(spell === spell.toUpperCase()) count++;
  }
  return count;
}

// 답안
// * ASCII 대문자는 65~90까지다
// 소문자는 97~122까지
function solution(string){
  let count = 0;
  for(let spell of string){
    let num = spell.charCodeAt();
    if(num >= 65 && num <= 90) count++;
  }
  return count;
}

console.log(solution('KoreaTimeGood'));