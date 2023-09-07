/* A를 #으로
대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는
프로그램을 작성하세요.
 */

const solution = (s) => {
  // replaceAll 지원 안되는 경우
  // return s.replace(/A/g, "#");
  return s.replaceAll("A", "#");
};

console.log(solution("BANANA")); // B#N#N#
