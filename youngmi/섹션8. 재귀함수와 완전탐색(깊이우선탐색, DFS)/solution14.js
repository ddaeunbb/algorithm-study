/* 조합 구하기
1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 M개를 뽑는 방법의 수를 출력하는 프로그
램을 작성하세요.
▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
출력순서는 사전순으로 오름차순으로 출력합니다. */

const solution = (n, m) => {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  const dfs = (v, s) => {
    if (v === m) {
      // m만큼 tmp에 넣었으면 현재 tmp 값 answer에 넣어주기
      answer.push(tmp.slice());
    } else {
      // 순열이 아닌 조합이기 때문에 i는 s부터 돈다
      for (let i = s; i <= n; i++) {
        // tmp 채워주기
        tmp[v] = i;
        // level 올려주고 i 이후부터 살펴보기 (조합이니까)
        dfs(v + 1, i + 1);
      }
    }
  };

  dfs(0, 1);
  return answer;
};
console.log(solution(4, 2));
