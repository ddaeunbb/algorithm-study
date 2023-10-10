/* 소수 찾기
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

제한사항
- numbers는 길이 1 이상 7 이하인 문자열입니다.
- numbers는 0~9까지 숫자만으로 이루어져 있습니다.
- "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다. */

const solution = (numbers) => {
  const answer = [];
  let nums = numbers.split("");

  // 소수 판별
  const isPrimeNum = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  // 순열 만들기
  const getPermutation = (arr, fixed) => {
    // 재귀 탈출 조건이 arr.length < 1
    console.log(arr, fixed);
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newNum = fixed + arr[i];
        const copyArr = [...arr];
        copyArr.splice(i, 1);
        console.log(newNum, copyArr);
        if (!answer.includes(+newNum) && isPrimeNum(+newNum)) {
          answer.push(+newNum);
        }
        console.log(answer);
        getPermutation(copyArr, newNum);
      }
    }
  };

  getPermutation(nums, "");
  return answer.length;
};

console.log(solution("143"));
