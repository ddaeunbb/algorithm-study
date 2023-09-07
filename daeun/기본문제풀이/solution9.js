// 9. A를 #으로
// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

// 내가 푼 풀이
function solution(string){
  let dict = string.split('');
  let answer = [];
  for(let spell of dict){ 
    if(spell === 'A') answer.push('#');
    else answer.push(spell);
  }
  return answer.join('')
}

// 정답
// function solution(string){
//   let answer = string;
//   answer.replace(/A/g, '#');
//   return answer;
// }

console.log(solution('BANANA'));