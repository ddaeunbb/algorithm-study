/* 세 수 중 최솟값
100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하
세요.(정렬을 사용하면 안됩니다) */

const solution = (a, b, c) => {
  return Math.min(+a, +b, +c);
};

console.log(solution(6, 5, -19)); // -19
