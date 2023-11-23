function solution(arr) {
  arr.sort(function (a, b) {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else return a[1] - b[1];
  });
  let priority = 0;
  let answer = 0;
  for (let x of arr) {
    if (x[0] >= priority) {
      answer++;
      priority = x[1];
    }
  }
  return answer;
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
