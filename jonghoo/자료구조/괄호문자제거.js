function solution(string) {
  let stack = [];
  let answer = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      stack.push(string[i]);
    } else if (string[i] === ")") {
      stack.pop();
    }
    if (stack.length === 0 && string[i] !== ")") {
      answer += string[i];
    }
  }
  return answer;
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
