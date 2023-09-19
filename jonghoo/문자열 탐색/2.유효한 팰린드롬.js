function solution(s) {
  let answer = "YES";
  //^ == 부정
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7DnuoF";
console.log(solution(str));
///////////////

function solution1(string) {
  let answer = "";
  for (let i = 0; i < string.length; i++) {
    // 각 문자의 ASCII 코드 값을 확인하여 알파벳인지 검사
    if (
      (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) || // 대문자
      (string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122) // 소문자
    ) {
      answer += string[i];
    }
  }
  answer = answer.toLowerCase();
  if (answer.split("").reverse().join("") !== answer) {
    return "NO";
  } else {
    return "YES";
  }
}

console.log(solution1("found7, time: study; Yduts; emit, 7DnuoF"));
