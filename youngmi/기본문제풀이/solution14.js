/* 가장 긴 문자열
N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요. */

const solution = (arr) => {
  let answer = arr[0];

  for (let i of arr) {
    if (i.length > answer.length) {
      answer = i;
    }
  }

  return answer;
};

console.log(solution(["teacher", "time", "student", "beautiful", "good"])); // beautiful
