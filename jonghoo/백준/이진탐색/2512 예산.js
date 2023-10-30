function solution(arr, m) {
  let start = 1;
  let end = Math.max(...arr);
  let result = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for (x of arr) {
      total += Math.min(x, mid);
    }
    if (total <= m) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}

console.log(solution([120, 110, 140, 150], 485));
console.log(solution([70, 80, 30, 40, 100], 450));
