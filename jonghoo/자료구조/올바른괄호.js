function solution(string) {
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "(") {
      stack.push(i);
    } else if (string[i] == ")") {
      stack.pop();
    }
  }
  if (stack.length === 0) return "YES";
  else return "NO";
}

console.log(solution("(()(()))(()"));
