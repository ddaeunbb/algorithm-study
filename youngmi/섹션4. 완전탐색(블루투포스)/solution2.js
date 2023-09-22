/* 뒤집은 소수
N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하
는 프로그램을 작성하세요. 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출
력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
 */
const solution = (arr) => {
  let answer = [];

  for (num of arr) {
    // 약수 개수 카운팅. 2개면 소수
    let divisors = 0;
    // 숫자 뒤집기
    const reversedNum = +String(num).split("").reverse().join("");

    // 약수 카운팅하기
    for (let i = 1; i <= num; i++) {
      reversedNum % i === 0 ? divisors++ : "_";
    }

    // 약수 개수 2개면 answer에 push
    divisors === 2 ? answer.push(reversedNum) : "_";
  }

  return answer;
};

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr)); // [23, 2, 73, 2, 3]
