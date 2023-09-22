function solution1(string) {
  let answer = "";
  let temp = 1;
  string = string + " ";
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) temp++;
    else {
      answer += string[i];
      if (temp > 1) answer += String(temp);
      temp = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution1(str));
