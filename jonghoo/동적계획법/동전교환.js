function solution(arr, n) {
  let check = Array.from({ length: n + 1 }, () => 0);
  for (let x of arr) {
    check[x] = 1;
  }
  for (let i = 1; i <= n; i++) {
    let min = Number.MAX_VALUE;
    if (check[i] !== 0) continue;
    for (let x of arr) {
      if (i - x > 0) {
        min = Math.min(min, check[i - x] + 1);
      }
    }
    check[i] = min;
  }
  return check[n];
}

console.log(solution([1, 2, 5], 15));
