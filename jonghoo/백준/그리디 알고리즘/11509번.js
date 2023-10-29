function solution(arr) {
  let result = 0;
  let arrow = new Array(1000001).fill(0);
  for (let x of arr) {
    if (arrow[x] > 0) {
      arrow[x] -= 1;
      arrow[x - 1] += 1;
    } else {
      arrow[x - 1] += 1;
      result += 1;
    }
  }
  return result;
}

console.log(solution([4, 5, 2, 1, 4]));
