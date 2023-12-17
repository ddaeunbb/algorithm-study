/* 조합의 경우수(메모이제이션)
    
 로 계산합니다. 하지만 여러분은 이 공식을 쓰지않고 다음 공식을 사용하여
재귀를 이용해 조합수를 구해주는 프로그램을 작성하세요.


    
▣ 입력설명
첫째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력됩니다.
▣ 출력설명
첫째 줄에 조합수를 출력합니다.
 */

const solution = (n, r) => {
  let answer = [];
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
};
console.log(solution(5, 3));
