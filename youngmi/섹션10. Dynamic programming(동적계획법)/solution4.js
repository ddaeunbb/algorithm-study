/* 동전교환(냅색 알고리즘)
다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환
해주려면 어떻게 주면 되는가? 각 단위의 동전은 무한정 쓸 수 있다.

▣ 입력설명
첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다. 두 번째 줄에는 N개의 동전의 종
류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다.
각 동전의 종류는 100원을 넘지 않는다.
▣ 출력설명
첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다 */

/* 냅색 알고리즘: 배낭 문제에서 도출된 알고리즘으로 여러 물건이 있을 때, 특정한 조건을 만족하는 조합을 구하는 알고리즘이다. */

const solution = (m, coin) => {
  let answer = 500;

  const dfs = (v, curCoin, sum) => {
    // 이번에 선택한 동전(curCoin) + 이때까지의 합이 m 넘어서면 return
    if (sum > m) {
      return;
    }
    // 이번에 선택한 동전(curCoin) + 이때까지의 합이 딱 m이면 answer값과 비교해서 횟수 작을 경우 바꿔줌
    if (sum + curCoin === m) {
      if (answer > v) answer = v;
    } else {
      for (let i = 0; i < coin.length; i++) {
        dfs(v + 1, coin[i], sum + curCoin);
      }
    }
  };

  for (let i = 0; i < coin.length; i++) {
    dfs(1, coin[i], 0);
  }

  return answer;
};

console.log(solution(15, [1, 2, 5])); // 3
console.log(solution(10, [1])); // 10

// reference
const reference = (m, coin) => {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 1000);
  console.log(dy);
  dy[0] = 0;
  for (let i = 1; i < arr.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  answer = dy[m];
  return answer;
};

console.log(reference(15, [1, 2, 5]));
