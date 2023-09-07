// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

function solution(number) {
  console.log(((number + 1) * number) / 2);
}

solution(6);
solution(10);

function solution1(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }

  return answer;
}

console.log(solution1(10));
