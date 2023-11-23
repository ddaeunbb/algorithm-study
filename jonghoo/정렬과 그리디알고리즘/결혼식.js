function solution(arr) {
  let timezone = [];
  for (let i = 0; i < arr.length; i++) {
    timezone.push([arr[i][0], 0]);
    timezone.push([arr[i][1], 1]);
  }
  timezone.sort(function (a, b) {
    if (a[0] == b[0]) {
      return b[1] - a[1];
    } else return a[0] - b[0];
  });
  let person = 0;
  let answer = [];
  for (let i = 0; i < timezone.length; i++) {
    if (timezone[i][1] == 0) {
      person++;
    } else person--;
    answer.push(person);
  }
  return Math.max(...answer);
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
