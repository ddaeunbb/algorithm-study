// function solution(arr) {
//   let string = arr.join("");
//   let answer = [];
//   for (x of string) {
//     answer.push(x);
//   }
//   return Number(
//     answer
//       .sort(function (a, b) {
//         return b - a;
//       })
//       .join("")
//   );
// }

// console.log(solution([6, 10, 2]));

function solution(arr) {
  arr.sort(function (a, b) {
    let strA = a.toString();
    let strB = b.toString();

    // 문자열을 이어 붙인 후 두 가지 방식으로 비교
    let ab = strA + strB;
    let ba = strB + strA;

    // 문자열을 비교하여 정렬
    if (ab < ba) {
      return 1;
    } else if (ab > ba) {
      return -1;
    } else {
      return 0;
    }
  });

  return arr.join("");
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([0, 0, 0]));
