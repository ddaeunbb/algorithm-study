function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      stack.push(Number(s[i]));
    } else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (s[i] === "+") {
        stack.push(lt + rt);
      } else if (s[i] === "-") {
        stack.push(lt - rt);
      } else if (s[i] === "*") {
        stack.push(lt * rt);
      } else if (s[i] === "/") {
        stack.push(lt / rt);
      }
    }
  }
  return stack[0];
}

console.log(solution("352+*9-"));
