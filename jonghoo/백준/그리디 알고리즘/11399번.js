function solution(arr) {
  arr.sort((a, b) => a - b);
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    answer += sum;
  }
  return answer;
}

console.log(solution([3, 1, 4, 3, 2]));
