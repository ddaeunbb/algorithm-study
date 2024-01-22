function solution(arr) {
  let n = arr.length;
  let answer = 0;
  let check = Array.from({ length: n }, () => 0);
  check[0] = 1;
  for (let i = 1; i < n; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && check[j] > max) {
        max = check[j];
      }
    }
    check[i] = max + 1;
    answer = Math.max(answer, check[i]);
  }
  return answer;
}
console.log(solution([2, 7, 5, 8, 6, 4, 7, 12, 3]));
