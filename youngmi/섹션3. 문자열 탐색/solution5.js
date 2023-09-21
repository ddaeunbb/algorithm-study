/* 문자열 압축
알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는
문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시
오. 단 반복횟수가 1인 경우 생략합니다.
 */

const solution = (s) => {
  let answer = s[0];

  let current = s[0];
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === current) {
      // 반복 문자 등장하면 count up
      count++;
    } else {
      // 다른 문자 등장하면 answer에 count와 새 문자 붙여주고 current 변경 및 count 초기화
      // count 1인 경우는 무시
      count !== 1 ? (answer += count) : "_";
      answer += s[i];
      current = s[i];
      count = 1;
    }
  }

  return answer;
};

let str = "KKHSSSSSSSE";
console.log(solution(str)); // K2HS7E
