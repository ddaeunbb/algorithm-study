function solution(m, arr) {
  let start = 1;
  let end = Math.max(...arr);
  let result = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for (let x of arr) {
      if (x >= mid) {
        total += x - mid;
      }
    }
    if (total >= m) {
      result = mid;
      start = mid + 1;
    } else end = mid - 1;
  }
  return result;
}

console.log(solution(7, [20, 15, 10, 17]));
