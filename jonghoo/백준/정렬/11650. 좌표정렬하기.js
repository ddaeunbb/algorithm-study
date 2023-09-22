function solution(arr) {
  return arr.sort(function (a, b) {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
}

console.log(
  solution([
    [3, 4],
    [1, 1],
    [1, -1],
    [2, 2],
    [3, 3],
  ])
);
