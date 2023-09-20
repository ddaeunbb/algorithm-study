function solution(string) {
  let answer = "";
  let temp = [];
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (!temp.includes(string[i])) {
      temp.push(string[i]);
      count++;
    } else if (temp.includes(string[i])) {
      count++;
    }
  }
  return temp;
}

console.log(solution("KKHSSSSSSSE"));

function solution1(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution1(str));
