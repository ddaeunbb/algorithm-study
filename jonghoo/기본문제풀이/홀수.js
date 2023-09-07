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

//정답

function solution1(arr) {
  let answer = [];
  let sum = 0,
    min = 1000;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution1(arr));
