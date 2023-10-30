function solution(num) {
  let count = 0;
  let flag = false;
  while (num >= 0) {
    if (num == 0 || num % 5 == 0) {
      count += parseInt(num / 5);
      flag = true;
      return count;
    }
    num -= 3;
    count += 1;
  }
  if (!flag) return -1;
}

console.log(solution(18));
console.log(solution(4));
console.log(solution(11));
