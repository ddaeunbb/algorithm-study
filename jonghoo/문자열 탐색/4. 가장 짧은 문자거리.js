function solution(string, element) {
  let elements = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === element) {
      elements.push(i);
    }
  }
  console.log(elements);

  let answer = "";
  for (let i = 0; i < string.length; i++) {
    let indexgap = [];
    for (x of elements) {
      indexgap.push(Math.abs(x - i));
    }

    indexgap.sort((a, b) => a - b);
    answer += indexgap[0] += " ";
  }

  return answer;
}

console.log(solution("teachermode", "e"));
