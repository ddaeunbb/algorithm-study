function solution(string) {
  let answer = [];
  for (let x of string) {
    if (!isNaN(Number(x))) {
      answer.push(x);
    }
  }
  while (answer[0] === "0") {
    answer.shift();
  }
  return answer.join("");
}

console.log(solution("g0en2T0s8eSoft"));
