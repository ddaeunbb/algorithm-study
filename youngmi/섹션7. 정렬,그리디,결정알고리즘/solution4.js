/* 삽입 정렬
N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
정렬하는 방법은 삽입정렬입니다.
▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에
있습니다.
▣ 출력설명
오름차순으로 정렬된 수열을 출력합니다.
 */

const solution = (arr) => {
  let answer = [...arr];

  for (let i = 1; i < answer.length; i++) {
    // 해당 턴에 삽입 한 숫자의 idx 값을 의미하는 변수
    let idx = i;
    for (let j = i; j >= 0; j--) {
      // 해당 삽입 위치부터 0까지 거꾸로 순회하며 확인
      if (answer[idx] < answer[j - 1]) {
        // 만약 삽입한 숫자가 그 앞자리 숫자보다 작으면 그 둘 위치 바꿔주고
        [answer[j - 1], answer[idx]] = [answer[idx], answer[j - 1]];
        // 삽입 위치도 앞자리 인덱스로 변경
        idx = j - 1;
      }
    }
  }
  return answer;

  //reference
  /*
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
  */
};
let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr)); // [5, 6, 7, 9, 10, 11]
