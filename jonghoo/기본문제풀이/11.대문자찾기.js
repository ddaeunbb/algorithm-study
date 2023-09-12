// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램
// 을 작성하세요.

function solution(string) {
  let count = 0;
  for (x of string) {
    if (x.toUpperCase() === x) {
      count++;
    }
  }
  console.log(count);
}

solution("KoreaTimeGood");

//아스키 코드넘버 범위
//대문자는 65~90 사이에속함.
//소문자는 97~122까지
// x.charCodeAt();
