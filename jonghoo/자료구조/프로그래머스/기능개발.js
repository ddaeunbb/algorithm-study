function solution(progresses, speeds) {
  let days = [];
  for (let i = 0; i < progresses.length; i++) {
    let day = 1;
    while (progresses[i] + speeds[i] * day < 100) {
      day++;
    }
    days.push(day);
  }
  let answer = [];
  let flag = days[0];
  let count = 0;
  for (let i = 0; i < days.length; i++) {
    if (flag < days[i]) {
      flag = days[i];
      answer.push(count);
      count = 0;
    }
    if (days[i] <= flag) {
      count++;
    }
    if (i == days.length - 1) {
      answer.push(count);
    }
  }
  return answer;
}
