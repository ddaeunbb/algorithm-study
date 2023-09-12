// 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다.
// 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
// 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난
// 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을
// 기억해 냈다.
// 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시
// 오.

//백트래킹.(돌아간다는) N퀸문제.

function solution(arr) {
  const targetSum = 100;
  const selected = [];

  function backtrack(currentIdx, currentSum) {
    if (selected.length === 7) {
      if (currentSum === targetSum) {
        console.log(selected.join(" "));
      }
      return;
    }

    if (currentIdx >= arr.length) {
      return;
    }

    selected.push(arr[currentIdx]);
    backtrack(currentIdx + 1, currentSum + arr[currentIdx]);
    selected.pop();

    backtrack(currentIdx + 1, currentSum);
  }

  backtrack(0, 0);
}

solution([22, 7, 21, 19, 10, 15, 25, 8, 13]);

///

function solution1(arr) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);
  let flag = false;
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
        flag = true;
        break;
      }
    }
    if (flag == true) break;
  }
  return answer;
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution1(arr));

const solution2 = (arr) => {
  let sumOfArr = arr.reduce((acc, cur) => (acc += cur));
  let exceptNum = sumOfArr - 100;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === exceptNum) {
        return arr.filter((num) => num !== arr[i] && num !== arr[j]);
      }
    }
  }
};

console.log(solution2([22, 7, 21, 19, 10, 15, 25, 8, 13])); // 20 7 23 19 10 8 13
