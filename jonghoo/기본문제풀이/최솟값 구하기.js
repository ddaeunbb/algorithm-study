// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

function solution(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr[0]);
}

solution([5, 3, 7, 11, 2, 15, 17]);
