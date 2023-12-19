/* 조합의 경우수(메모이제이션)
    
 로 계산합니다. 하지만 여러분은 이 공식을 쓰지않고 다음 공식을 사용하여
재귀를 이용해 조합수를 구해주는 프로그램을 작성하세요.


    
5C3 이면 5개 중에 3개를 뽑는 방법을 구하라는 것 
▣ 입력설명
첫째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력됩니다.
▣ 출력설명
첫째 줄에 조합수를 출력합니다.
 */

const solution = (n, r) => {
  let answer = [];
  // 메모이제이션 할 배열. 예를들어 2C1의 값은 2행 1열에 저장된다
  // 33까지 들어오는데 넉넉잡아서 35로 해주심... 왜?
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    // dy에 n행 r열에 값이 있으면(>0) 그 값을 리턴. 또 구할 필요 없음
    if (dy[n][r] > 0) return dy[n][r];
    // nCr 에서 r이 0이면 n개 중에 0개 뽑는 경우의 수 = 1개
    // r === n 이면 n개 중에 n(r) 개 뽑는 경우의 수 1개 따라서 return 1 해준다.
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
};
console.log(solution(5, 3));
