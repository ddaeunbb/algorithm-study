/* N으로 표현
아래와 같이 5와 사칙연산만으로 12를 표현할 수 있습니다.
12 = 5 + 5 + (5 / 5) + (5 / 5)
12 = 55 / 5 + 5 / 5
12 = (55 + 5) / 5
5를 사용한 횟수는 각각 6,5,4 입니다. 그리고 이중 가장 작은 경우는 4입니다.
이처럼 숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 
N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.

제한사항
- N은 1 이상 9 이하입니다.
- number는 1 이상 32,000 이하입니다.
- 수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
- 최솟값이 8보다 크면 -1을 return 합니다. */

const solution = (N, number) => {
  /* 
  let answer = 0;

  const dfs = (v, sum) => {
    console.log("v:", v, "sum:", sum);
    if (sum > number) return;
    if (number === sum) {
      if (answer > v) answer = v;
      return;
    }
    dfs(v + 1, sum + N);
    dfs(v + 1, sum - N);
    dfs(v + 1, sum / N);
    dfs(v + 1, sum * N);
  };

  dfs(0, N);

  return answer;*/

  /* N을 1번 사용하는 경우(5)를 use에 저장
  N을 2번 사용하는 경우(55, 5+5, 5*5, 5/5, 5-5)를 저장
  N을 3번 사용하는 경우는 N을 1번 사용하는 경우와 N을 2번사용하는 경우를 사칙연산하여 저장
  N을 4번 사용하는 경우는 N을 1번 3번, 2번 2번, 3번 1번 하는 경우를 사칙연산하여 저장
  i는 N을 몇 번이나 사용했는지에 대한 변수
  각 i에 대해 가능한 연산들을 추가하고, number가 있으면 i를 리턴

  문제에서 N이 8보다 크면 -1을 리턴하라고 하였으므로, 반복문에서도 결정이 되지않으면 -1을 리턴 */
  let answer = 0;
  //  N을 i+1번 사용하여 만들 수 있는 수의 집합
  let use = Array.from(new Array(9), () => new Set());
  // 이미 N이 number일 경우 1 리턴
  if (N == number) return 1;
  else {
    use.forEach((element, index) => {
      if (index !== 0) element.add(Number(String(N).repeat(index)));
    });

    console.log(use);
    for (let i = 1; i <= 8; ++i) {
      for (let j = 1; j < i; ++j) {
        for (let first of use[j]) {
          for (let second of use[i - j]) {
            use[i].add(first + second);
            use[i].add(first - second);
            use[i].add(first * second);
            use[i].add(first / second);
          }
        }
      }
      if (use[i].has(number)) return i;
    }
    return -1;
  }
  return answer;
};

console.log(solution(5, 12)); // 4
