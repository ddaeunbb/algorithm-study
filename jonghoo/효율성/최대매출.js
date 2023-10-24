function solution(N, K, arr) {
  let pri = N - K;
  let result = [];

  for (let i = 0; i <= pri; i++) {
    let right = i; // right 변수 초기화
    let sum = 0; // sum 변수 초기화

    // right - i가 2 이하인 동안 sum에 값을 더합니다.
    while (right - i <= 2 && right < N) {
      sum += arr[right];
      right++;
    }

    result.push(sum);
  }

  return result;
}

console.log(solution(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
