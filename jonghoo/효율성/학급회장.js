function solution(arr) {
  let a = 0,
    b = 0,
    c = 0,
    d = 0,
    e = 0;

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "A":
        a++;
        break;
      case "B":
        b++;
        break;
      case "C":
        c++;
        break;
      case "D":
        d++;
        break;
      case "E":
        e++;
        break;
    }
  }

  // 변수들을 비교하여 최대값을 찾음
  let maxCount = Math.max(a, b, c, d, e);
  let maxCase;

  // 최대값을 가진 변수의 `case`를 찾음
  if (maxCount === a) {
    maxCase = "A";
  } else if (maxCount === b) {
    maxCase = "B";
  } else if (maxCount === c) {
    maxCase = "C";
  } else if (maxCount === d) {
    maxCase = "D";
  } else if (maxCount === e) {
    maxCase = "E";
  }

  return maxCase;
}

let str = "BACBACCACCBDEDE".split("");
console.log(solution(str));
