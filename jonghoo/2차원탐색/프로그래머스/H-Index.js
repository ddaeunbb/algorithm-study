// function solution(arr) {
//   arr.sort((a, b) => b - a);
//   console.log(arr);

//   let hindex = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= i + 1) {
//       hindex = i + 1;
//     } else {
//       break;
//     }
//   }

//   return hindex;
// }

// console.log(solution([999, 700, 478, 400, 320]));

function solution1(arr) {
  let max = arr.length;
  arr.sort((a, b) => b - a);

  let count = 0;
  for (let i = 1; i <= max; i++) {
    for (a of arr) {
      count++;
    }
    if (count === i) break;
    else count = 0;
  }
  return count;
}

console.log(solution1([1, 4])); //2
console.log(solution1([0, 1, 2])); //3
