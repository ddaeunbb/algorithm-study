function solution(string) {
  let x = string.split("-");
  let answer = 0;
  for (let i = 0; i < x.length; i++) {
    let cur = x[i]
      .split("+")
      .map(Number)
      .reduce((a, b) => a + b);
    if (i == 0) answer += cur;
    else answer -= cur;
  }
  return answer;
}

console.log(solution("55-50+40"));
