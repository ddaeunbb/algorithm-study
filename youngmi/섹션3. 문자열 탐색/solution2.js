/* 유효한 팰린드롬
앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을
작성하세요.
단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다.
알파벳 이외의 문자들의 무시합니다.
 */

const solution = (s) => {
  // 비교를 위해 전부 대문자로 변경
  const upperS = s.toUpperCase();

  // 공백과 특수문자 지워줌
  const onlyString = upperS
    .split(" ")
    .join("")
    .replace(/[^A-Z]/g, "");

  // 문자 길이가 짝수인지 홀수인지에 따라 중간 지점 설정
  const start =
    onlyString.length % 2 === 0
      ? onlyString.length / 2
      : onlyString.length / 2 + 1;
  const end = onlyString.length / 2;

  // 왼쪽 부분, 오른쪽 부분
  let left = onlyString.slice(0, start);
  let right = onlyString.slice(end);

  // 왼쪽 부분과 비교를 위해 오른쪽 부분을 반전 시켜줌
  let reversedRight = "";

  for (let i = right.length - 1; i >= 0; i--) {
    reversedRight += right[i];
  }

  return left === reversedRight ? "YES" : "NO";
};

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof")); // YES
