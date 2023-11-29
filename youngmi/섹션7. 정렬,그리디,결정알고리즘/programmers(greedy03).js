/* 큰 수 만들기
문제 설명
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. 
number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

제한 조건
number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
k는 1 이상 number의 자릿수 미만인 자연수입니다. */

const solution = (number, k) => {
  const arr = [];
  for (let i = 0; i < number.length; i++) {
    // 배열 마지막 숫자와 현재 숫자를 비교하며 현재 숫자가 더 크면 해당 숫자를 pop함
    while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
      console.log("while 들어옴 ", k, arr);
      // 현재 숫자보다 큰 수가 나올때까지 최대 k번 반복함
      k--;
      arr.pop();
      console.log("while 끝 ", k, arr);
    }
    arr.push(number[i]);
    console.log("while 안 드가고  arr에 push", k, arr);
  }
  arr.splice(number.length - k, k); // 모든 숫자를 비교한 후 k가 0보다 크면 남은 k만큼 뒤에서 제거함
  console.log("splice ", k, arr);

  return arr.join("");
};

let number = "4177252841";
let k = 4;
console.log(solution(number, k)); // 775841
