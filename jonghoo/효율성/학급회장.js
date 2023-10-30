function solution(arr) {
  let answer = "";
  let hasMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hasMap.has(arr[i])) {
      hasMap.set(arr[i], hasMap.get(arr[i]) + 1);
    } else hasMap.set(arr[i], 1);
  }

  //첫번쨰 방법
  // let newarr = [...hasMap].sort((a, b) => b[1] - a[1]);
  // return newarr[0][0];

  //두번쨰 방법
  let max = 0;
  for (let element of hasMap.keys()) {
    if (hasMap.get(element) > max) {
      max = hasMap.get(element);
      answer = element;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE".split("");
console.log(solution(str));
