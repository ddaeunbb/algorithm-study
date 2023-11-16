function solution(arr) {
  arr.sort(function (a, b) {
    if (a > 0 && b < 0) {
      return 1;
    } else if (a < 0 && b > 0) {
      return -1;
    } else return 0;
  });
  return arr;
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
