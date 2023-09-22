function solution(string) {
  let answer = [];
  for (let x of string) {
    if (!isNaN(Number(x))) {
      answer.push(x);
    }
  }

  return Number(answer.join(""));
}

console.log(solution("g0en2T0s8eSoft"));

//////

function isNumber(element) {
  return /^[0-9]+$/.test(element);
}

function solution1(string) {
  let answer = [];
  for (let x of string) {
    if (isNumber(x)) {
      answer.push(x);
    }
  }

  return Number(answer.join(""));
}

console.log(solution1("g0en2T0s8eSoft"));

//문자열을 탐색해 숫자인지 아닌지를 판별해 숫자인 요소만을 담아준다.
//숫자인지 아닌지 판별하는방법.
//만약 담아준 자료구조에서 첫번쨰요소가 0이라면 제거해준후 숫자로 변환해준다.

//gpt 의최적화

function solution2(string) {
  let answer = "";
  let foundNonZero = false; // To track the first non-zero digit

  for (let x of string) {
    if (x >= "0" && x <= "9") {
      if (x !== "0" || foundNonZero) {
        answer += x;
        if (x !== "0") foundNonZero = true;
      }
    }
  }

  return answer.length === 0 ? 0 : Number(answer);
}

console.log(solution2("g0en2T0s8eSoft"));

/////

function isNumber1(char) {
  return char >= "0" && char <= "9";
}

console.log(isNumber1("g"));

function solution3(string) {
  let answer = "";
  let foundNonZero = false;

  for (let char of string) {
    if (isNumber1(char)) {
      if (char !== "0" || foundNonZero) {
        answer += char;
        if (char !== "0") foundNonZero = true;
      }
    }
  }

  return answer.length === 0 ? 0 : Number(answer);
}

console.log(solution3("g0en2T0s8eSoft"));
