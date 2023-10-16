function solution(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    arr.push(arr2[i]);
  }

  let answer = Array(...new Set(arr));
  return answer.sort(function (a, b) {
    return a - b;
  });
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));

function solution1(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1++]);
    } else answer.push(arr2[p2++]);
  }

  while (p1 < n) {
    answer.push(arr1[p1++]);
  }
  while (p2 < m) {
    answer.push(arr2[p2++]);
  }
  return answer;
}

console.log(solution1([1, 3, 5], [2, 3, 6, 7, 9]));
