// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
// 출력하는 문자열은 원래의 입력순서를 유지합니다.
function solution(number, arr) {
  let answer = [];
  for (let i = 0; i < number; i++) {
    if (!answer.includes(arr[i])) {
      answer.push(arr[i]);
    }
  }
  console.log(answer.join("\n"));
}

solution(5, ["good", "time", "good", "time", "student"]);

// Set 자료구조활용

const foo = new Set(["good", "time", "good", "time", "student"]);
console.log(Array.from(foo));

//문제풀이

function solution1(s) {
  let answer;
  answer = s.filter(function (v, i) {
    if (s.indexOf(v) === i) return true;
  });

  return answer;
}

console.log(solution1(["good", "time", "good", "time", "student"]));
