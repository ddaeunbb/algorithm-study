function solution(string) {
  let stack = [];
  let answer = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "(" && string[i + 1] == ")") {
      answer = answer + stack.length;
      i++;
    } else if (string[i] == "(") {
      stack.push(string[i]);
      answer++;
    } else stack.pop();
  }
  return answer;
}

console.log(solution("()(((()())(())()))(())"));
