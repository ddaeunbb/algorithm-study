// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

function solution(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr[0]);
}

solution([5, 3, 7, 11, 2, 15, 17]);

//답풀이
function solution1(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

let arr1 = [5, 7, 1, 3, 2, 9, 11];
console.log(solution1(arr1));
