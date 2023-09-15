// function solution(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//   console.log(arr[i - 1][j]);
//   console.log(arr[i][j - 1]);
//   console.log(arr[i + 1][j]);
//   console.log(arr[i][j + 1]);
//       if (i - 1 > 0) {
//         console.log(arr[i - 1][j]);
//       }
//     }
//   }
// }

function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let temp = true;
      for (let k = 0; k < direction.length; k++) {
        let x = i + direction[k][0];
        let y = j + direction[k][1];
        if (x >= 0 && x < n && y >= 0 && y < n && arr[x][y] >= arr[i][j]) {
          temp = false;
        }
      }
      if (temp) answer++;
    }
  }
  return answer;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
