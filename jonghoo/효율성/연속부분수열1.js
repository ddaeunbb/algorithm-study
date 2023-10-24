function solution(m, arr) {
  let count = 0;
  let left = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === m) count++;
    while (sum >= m) {
      sum -= arr[left++];
      if (sum === m) count++;
    }
  }
  return count;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
