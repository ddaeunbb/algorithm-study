function solution(priorities, location) {
  let answer = 0;
  while (priorities.length > 0) {
    const current = priorities.shift();
    if (priorities.some((priority) => priority > current)) {
      priorities.push(current);
    } else {
      answer++;
      if (location === 0) {
        break;
      }
    }
    if (location > 0) {
      location--;
    } else {
      location = priorities.length - 1;
    }
  }
  return answer;
}

console.log(solution([2, 1, 3, 2], 2));
