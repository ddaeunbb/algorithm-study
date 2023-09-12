/* 격자판 최대합
5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19
N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합
니다. 

입력설명
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
다. 
*/

const solution = (arr) => {
  let maxCol = 0;
  let maxRow = 0;
  let crossOne = 0;
  let crossTwo = 0;

  for (let i = 0; i < 5; i++) {
    let colSum = 0;
    let rowSum = 0;
    for (let j = 0; j < 5; j++) {
      rowSum += arr[i][j];
      if (rowSum > maxRow) {
        maxRow = rowSum;
      }
      colSum += arr[j][i];
      if (colSum > maxCol) {
        maxCol = colSum;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    crossOne += arr[i][i];
    crossTwo += arr[i][arr.length - i - 1];
  }
  return Math.max(maxCol, maxRow, crossOne, crossTwo);
};

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr)); // 155
