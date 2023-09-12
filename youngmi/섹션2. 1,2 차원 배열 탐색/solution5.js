/* 등수구하기
N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는
프로그램을 작성하세요.
 */

const solution = (arr) => {
  let answer = [];
  // 스프레드 연산자 써서 복사 후 sort 해 준다.
  let sortArr = [...arr].sort((a, b) => b - a);

  for (let i of sortArr) {
    // 인덱스는 0부터 시작하므로 +1 해주어야 함.
    answer.push(arr.indexOf(i) + 1);
  }

  return answer;
};

console.log(solution([87, 89, 92, 100, 76])); // 4 3 2 1 5
