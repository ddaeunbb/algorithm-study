function solution(arr) {
  arr.sort((x, y) => x[0] - y[0]);
  let count = 0;
  let minvalue = 100001;
  for (let [x, y] of arr) {
    if (y < minvalue) {
      minvalue = y;
      count += 1;
    }
  }
  return count;
}

console.log(
  solution([
    [3, 2],
    [1, 4],
    [4, 1],
    [2, 3],
    [5, 5],
  ])
);
