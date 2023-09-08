// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

function solution(number, arr) {
  let answer = "";
  for (let i = 0; i < number; i++) {
    if (arr[i].length > answer.length) {
      answer = arr[i];
    }
  }
  console.log(answer);
}

solution(5, ["teacher", "time", "student", "beautiful", "good"]);
