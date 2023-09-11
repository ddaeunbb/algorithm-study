/* 가위 바위 보
A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고,
B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
 */

// 제한 사항 N의 길이는 100이하 => 시간 복잡도 생각 안해도 됨

const solution = (a, b) => {
  let answer = [];

  for (let i = 0; i < a.length; i++) {
    let result = a[i] - b[i];

    if (result === 0) {
      // 비길 때
      answer.push("D");
    } else if (result === -2 || (result > 0 && result !== 2)) {
      // A가 이길 때
      answer.push("A");
    } else {
      // B가 이길 때
      answer.push("B");
    }
  }

  return answer;
};

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b)); // [ 'A', 'B', 'A', 'B', 'D' ]
