function solution(arr) {
  let N = arr.length;
  let answer = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let direction = [
        [-1, 0],
        [-1, -1],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
      ];
      if (arr[i][j] === 1) {
        answer.push([i, j]);
        for (let k = 0; k < direction.length; k++) {
          let x = i + direction[k][0];
          let y = j + direction[k][1];
          if (x >= 0 && x < N && y >= 0 && y < N) {
            answer.push([x, y]);
          }
        }
      }
    }
  }

  const uniqueArray = [...new Set(answer.map(JSON.stringify))].map(JSON.parse);
  return N * N - uniqueArray.length;
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);
console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
);
console.log(
  solution([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
);
