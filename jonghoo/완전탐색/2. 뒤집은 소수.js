function solution(arr) {
  let answer = [];
  for (x of arr) {
    String(x).split("").reverse().join("");
    return x;
  }
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
