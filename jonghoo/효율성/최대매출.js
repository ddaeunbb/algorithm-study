function solution(N, K, arr) {
  let pri = N - K;
  let left = 0;
  let sum = 0;
  let result = [];
  for (let i = 0; i < K; i++) {
    sum += arr[left + i];
  }
  return result;
}

console.log(solution(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
