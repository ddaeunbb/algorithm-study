function solution(arr, N) {
  let sum = 0;
  let left = 0;
  let count = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > N) {
      sum -= arr[left];
      left++;
    }

    count += right - left + 1;
  }

  return count;
}

console.log(solution([1, 3, 1, 2, 3], 5));
