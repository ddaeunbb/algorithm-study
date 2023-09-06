/* 홀수
7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들
중 최소값을 찾는 프로그램을 작성하세요.
 */

const solution = (a, b, c, d, e, f, g) => {
  let oddArr = [a, b, c, d, e, f, g].filter((num) => num % 2 === 1);
  let sumOfOdd = oddArr.reduce((acc, cur) => (acc += cur));

  return [sumOfOdd, Math.min(...oddArr)];
};

console.log(solution(12, 77, 38, 41, 53, 92, 85)); // [256, 41]
