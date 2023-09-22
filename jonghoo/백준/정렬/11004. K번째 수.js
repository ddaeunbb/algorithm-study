function solution(arr, k) {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}

console.log(solution([4, 1, 2, 3, 5], 2));
