function solution(arr) {
  let a = [1, 2, 3, 4, 5];
  let b = [2, 1, 2, 3, 2, 4, 2, 5];
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let ax = Math.floor(arr.length / 5);
  let ay = arr.length % 5;
  let countA = 0;
  let newarr = [];
  if (ay !== 0) {
    let subarr = arr.slice(5 * ax, 5 * ax + ay);
    for (let i = 0; i < subarr.length; i++) {
      if (subarr[i] === a[i]) {
        countA++;
      }
    }
  }
  for (let i = 0; i < ax; i++) {
    newarr = arr.slice(i * 5, 5 * i + 5);
    for (let j = 0; j < 5; j++) {
      if (newarr[j] === a[j]) {
        countA++;
      }
    }
  }

  let bx = Math.floor(arr.length / 8);
  let by = arr.length % 8;
  let countB = 0;
  if (by !== 0) {
    let subarr = arr.slice(8 * bx, 8 * bx + by);
    for (let i = 0; i < subarr.length; i++) {
      if (subarr[i] === b[i]) {
        countB++;
      }
    }
  }
  for (let i = 0; i < bx; i++) {
    newarr = arr.slice(i * 8, 8 * i + 8);
    for (let j = 0; j < 8; j++) {
      if (newarr[j] === b[j]) {
        countB++;
      }
    }
  }

  let cx = Math.floor(arr.length / 10);
  let cy = arr.length % 10;
  let countC = 0;
  if (cy !== 0) {
    let subarr = arr.slice(10 * cx, 10 * cx + cy);
    for (let i = 0; i < subarr.length; i++) {
      if (subarr[i] === c[i]) {
        countC++;
      }
    }
  }
  for (let i = 0; i < cx; i++) {
    newarr = arr.slice(i * 10, 10 * i + 10);
    for (let j = 0; j < 10; j++) {
      if (newarr[j] === c[j]) {
        countC++;
      }
    }
  }

  let countarr = [countA, countB, countC];
  let answer = [];
  let max = Math.max(countA, countB, countC);
  for (let i = 0; i < countarr.length; i++) {
    if (max === countarr[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 1]));
console.log(solution([1, 3, 2, 4, 2]));
console.log(solution([2, 1, 2, 3, 2, 4, 2, 5]));
