// 1. 회전 문자열
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다. 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요. 단 회문을 검사할 때 대소문자를 구분하지 않습니다. 


// 내가 푼 풀이
function solution(string){
  let copy = string.toLowerCase();
  let reverse = copy.split('').reverse().join('')
  return copy === reverse ? 'YES' : 'NO';
}

// 정답
function solution(string){
  string = string.toLowerCase();
  let len = string.length;

  for(let i = 0; i<Math.floor(len / 2); i++){
    // 앞에서 그리고 뒤로 부터 돌면서 확인한다.
    if(string[i] !== string[len-i-1]) return 'NO'
  }
  return 'YES'
}

console.log(solution('gooG'));