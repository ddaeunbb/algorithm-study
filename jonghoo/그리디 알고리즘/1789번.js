function solution(num) {
  let sum = 0;
  let current = 0;

  while (sum <= num) {
    current += 1;
    sum += current;
  }
  return current - 1;
}

console.log(solution(200));
