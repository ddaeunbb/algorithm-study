function solution(arr) {
  let uniqueArray = [...new Set(arr)];
  let myMap = new Map();
  uniqueArray.sort((a, b) => a - b);
  for (let i = 0; i < uniqueArray.length; i++) {
    myMap.set(uniqueArray[i], i);
  }
  answer = "";
  for (x of arr) answer += myMap.get(x) + " ";
  return answer;
}

console.log(solution([2, 4, -10, 4, -9]));
