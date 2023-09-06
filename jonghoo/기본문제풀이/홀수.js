function solution(arr) {
  let answer = [];
  arr.sort((a, b) => a - b);
  for (x of arr) {
    if (x % 2 === 1) {
      answer.push(x);
    }
  }
  console.log(answer.reduce((a, b) => a + b));
  console.log(answer[0]);
}

solution([12, 77, 38, 41, 53, 92, 85]);
