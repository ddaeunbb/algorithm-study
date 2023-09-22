function solution1(arr) {
  let answer;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i]
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    if (sum > max) {
      max = sum;
      answer = arr[i];
    } else if (sum === max) {
      if (arr[i] > answer) answer = arr[i];
    }
  }
  return answer;
}

console.log(solution1([128, 460, 603, 40, 521, 137, 123]));
