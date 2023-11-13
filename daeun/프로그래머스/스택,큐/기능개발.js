function solution(progresses, speeds) {
  let answer = [];
  let days = progresses.map((progresses, idx) =>
    Math.ceil((100 - progresses) / speeds[idx])
  ); // [7, 3, 9]

  let cnt = 1;
  let maxDay = days[0]; // 7

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      cnt++;
    } else {
      maxDay = days[i];
      answer.push(cnt);
      cnt = 1;
    }
  }
  answer.push(cnt);
  return answer;
}

// [93, 30, 55], [1, 30, 5] => [2,1]