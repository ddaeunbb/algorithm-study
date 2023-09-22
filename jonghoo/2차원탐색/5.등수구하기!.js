// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는
// 프로그램을 작성하세요.

function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

/// 병합정렬을 통한풀이

function solution1(arr) {
  let uniqueArray = [...new Set(arr)];
  let myMap = new Map();
  uniqueArray.sort((a, b) => b - a);
  for (let i = 0; i < uniqueArray.length; i++) {
    myMap.set(uniqueArray[i], i + 1);
  }
  answer = "";

  for (x of arr) answer += myMap.get(x) + " ";
  return answer;
}

console.log(solution1([87, 89, 92, 100, 76]));
