/* 경로 탐색(인접리스트)
방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프
로그램을 작성하세요.  
▣ 입력설명
첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다. 그 다음부터 M줄에 걸쳐 연
결정보가 주어진다.
▣ 출력설명
총 가지수를 출력한다.
 */

const solution = (n, arr) => {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let check = Array.from({ length: n + 1 }, () => 0);
  let path = [];

  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  const dfs = (v) => {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let nv of graph[v]) {
        if (check[nv] === 0) {
          path.push(nv);
          check[nv] = 1;
          dfs(nv);
          check[nv] = 0;
          path.pop();
        }
      }
    }
  };

  check[1] = 1;
  dfs(1);
  return answer;
};

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
