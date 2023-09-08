/* 대소문자 변환
대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로
변환하여 출력하는 프로그램을 작성하세요.
 */

const solution = (s) => {
  let answer = [];
  let uppercaseS = s.toUpperCase();

  for (let i = 0; i < s.length; i++) {
    s[i] === uppercaseS[i]
      ? answer.push(s[i].toLowerCase())
      : answer.push(s[i].toUpperCase());
  }

  return answer.join("");
};

console.log(solution("StuDY")); // sTUdy
