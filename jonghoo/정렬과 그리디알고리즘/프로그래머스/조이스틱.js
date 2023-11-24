function movealphabat(s) {
  let rule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (rule.match(s).index > 13) {
    return 26 - rule.match(s).index;
  } else return rule.match(s).index;
}

function solution(name) {
  let answer = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] == "A") {
      answer++;
    } else answer += movealphabat(name[i]);
  }
  return answer;
}

console.log(solution("JAN"));
console.log(movealphabat("O"));

12 + 9;
