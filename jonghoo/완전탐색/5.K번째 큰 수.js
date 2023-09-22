function solution(arr) {
  let N = arr[0][0];
  let M = arr[0][1];
  let Karray = [];
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        Karray.push(arr[1][i] + arr[1][j] + arr[1][k]);
      }
    }
  }
  Karray.sort((a, b) => b - a);
  return Karray[M - 1];
}

console.log(
  solution([
    [10, 3],
    [13, 15, 34, 23, 45, 65, 33, 11, 26, 42],
  ])
);
