function solution(num, goal) {
  count = 1;
  let flag = false;
  while (num <= goal) {
    if (num == goal) {
      flag = true;
      break;
    }
    if (goal % 2 == 0) goal = parseInt(goal / 2);
    else if (goal % 10 == 1) goal = parseInt(goal / 10);
    else break;
    count++;
  }
  if (flag) console.log(count);
  else console.log(-1);
}

solution(2, 162);
solution(4, 42);
solution(100, 40021);
