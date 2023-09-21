/* 자릿수의 합
N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
 */

const solution = (n, arr) => {
  let answer = arr[0];
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = 0; j < String(arr[i]).length; j++) {
      // arr[i]의 자릿수만큼 for문 돌면서 자릿수 합 구하기
      sum += Number(String(arr[i])[j]);
    }

    if (sum >= maxSum) {
      // 만약 자릿수 합이 maxSum보다 크면 maxSum 갱신해주고 answer도 해당 arr[i]로 갱신
      maxSum = sum;
      answer = arr[i];
    }
  }

  return answer;
};

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr)); // 137
