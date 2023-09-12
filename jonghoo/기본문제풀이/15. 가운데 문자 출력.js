// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세
// 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

function solution(string) {
  if (string.length % 2 === 1) {
    console.log(string[Math.floor(string.length / 2)]);
  } else
    console.log(
      string[Math.floor(string.length / 2) - 1],
      string[Math.floor(string.length / 2)]
    );
}

solution("study");
solution("good");

//

function solution1(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  //if(s.length%2===1) answer=s.substr(mid, 1);
  //else answer=s.substr(mid-1, 2);
  return answer;
}
console.log(solution1("study"));

//substring
//(1,2)
//(2)
//substr
//(1,2) 사용을잘안하게됨.
