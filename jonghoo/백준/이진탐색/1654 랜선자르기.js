function solution(n, arr) {
  let start = 1;
  let end = Math.max(...arr);
  let result = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for (x of arr) {
      total += parseInt(x / mid);
    }
    if (total >= n) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}

console.log(solution(11, [802, 743, 457, 539]));
