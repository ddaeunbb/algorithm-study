function solution(arr1, arr2) {
  let hashmap = new Map();
  for (let i = 0; i < arr1.length; i++) {
    if (hashmap.has(arr1[i])) {
      hashmap.set(arr1[i], hashmap.get(arr1[i]) + 1);
    } else hashmap.set(arr1[i], 1);
  }
  let answer = [];
  for (let i = 0; i < arr2.length; i++) {
    if (hashmap.has(arr2[i])) {
      answer.push(hashmap.get(arr2[i]));
    } else answer.push(0);
  }
  return answer;
}

console.log(
  solution([6, 3, 2, 10, 10, 10, -10, -10, 7, 3], [10, 9, -5, 2, 3, 4, 5, -10])
);

//해시를 사용해서 풀었다. (이진탐색으로 풀어보자)
