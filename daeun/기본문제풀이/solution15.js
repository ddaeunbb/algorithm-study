// 15. 가운데 문자 출력
// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

function solution(string){
  if(string.length % 2 === 0){
    let middle = Math.floor(string.length / 2);
    return string[middle-1] + string[middle];
  } else {
    let middle = Math.floor(string.length / 2);
    return string[middle];
  }
}

function solution(string){
  let answer;
  let mid = Math.floor(string.length / 2);
  if(string.length % 2 === 1) answer=string.substring(mid, mid+1);
  else answer=string.substring(mid-1, mid+1);
}


console.log(solution('study'));
console.log(solution('good'));