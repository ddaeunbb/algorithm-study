/* 회문 문자열
앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력
하는 프로그램을 작성하세요.
단 회문을 검사할 때 대소문자를 구분하지 않습니다. */

const solution = (s) => {
  // 비교를 위해 전부 대문자로 변경
  let upperS = s.toUpperCase();

  // 문자 길이가 짝수인지 홀수인지에 따라 중간 지점 설정
  const start = s.length % 2 === 0 ? s.length / 2 : s.length / 2 + 1;
  const end = s.length / 2;

  // 왼쪽 부분, 오른쪽 부분
  // 굳이 왼쪽 오른쪽 안 나누고 전체를 통째로 비교하면 됨 ....
  let left = upperS.slice(0, start);
  let right = upperS.slice(end);

  // 왼쪽 부분과 비교를 위해 오른쪽 부분을 반전 시켜줌
  // reverse를 쓰자 ....
  let reversedRight = "";

  for (let i = right.length - 1; i >= 0; i--) {
    reversedRight += right[i];
  }

  return left === reversedRight ? "YES" : "NO";
};

console.log(solution("gooG")); // YES
console.log(solution("yell")); // NO
console.log(solution("YeliLEy")); // YES
