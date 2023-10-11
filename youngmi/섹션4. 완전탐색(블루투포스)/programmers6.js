/* 전력망을 둘로 나누기
n개의 송전탑이 전선을 통해 하나의 트리 형태로 연결되어 있습니다. 
당신은 이 전선들 중 하나를 끊어서 현재의 전력망 네트워크를 2개로 분할하려고 합니다. 
이때, 두 전력망이 갖게 되는 송전탑의 개수를 최대한 비슷하게 맞추고자 합니다.

송전탑의 개수 n, 그리고 전선 정보 wires가 매개변수로 주어집니다. 
전선들 중 하나를 끊어서 송전탑 개수가 가능한 비슷하도록 두 전력망으로 나누었을 때, 
두 전력망이 가지고 있는 송전탑 개수의 차이(절대값)를 return 하도록 solution 함수를 완성해주세요.

제한사항
- n은 2 이상 100 이하인 자연수입니다.
- wires는 길이가 n-1인 정수형 2차원 배열입니다.
- wires의 각 원소는 [v1, v2] 2개의 자연수로 이루어져 있으며, 이는 전력망의 v1번 송전탑과 v2번 송전탑이 전선으로 연결되어 있다는 것을 의미합니다.
- 1 ≤ v1 < v2 ≤ n 입니다.
- 전력망 네트워크가 하나의 트리 형태가 아닌 경우는 입력으로 주어지지 않습니다. */

function solution(n, wires) {
  var answer = Number.MAX_SAFE_INTEGER;
  // 트리 만들기
  // Array.from()으로 []를 10개 가진 이차원 배열 만들어 줌.
  let tree = Array.from(Array(n + 1), () => []);

  console.log(wires);

  wires.map((element) => {
    let [a, b] = element;

    tree[a].push(b);
    tree[b].push(a);
  });

  console.log(tree);

  // root노드와 예외 노드
  // root노드부터 시작해서 예외 노드 제외하고는 모두 탐색해서 count값을 리턴
  function searchTree(root, exceptNum) {
    console.log("root노드", root, " 예외 노드", exceptNum);
    let count = 0;
    let visit = [];
    let queue = [root];
    console.log("queue", queue);
    // 일단 루트 노드는 무조건 방문이니까 방명록 작성
    visit[root] = true;
    console.log("visit", visit);
    while (queue.length) {
      let index = queue.pop();
      tree[index].forEach((element) => {
        // 만약 해당 노드가 예외 노드가 아니면서 방문한적 없는 노드라면
        if (element !== exceptNum && visit[element] !== true) {
          // 방문했다고 기록해주고
          visit[element] = true;
          // queue에 넣어줌 (이제 얘랑 연결된 애들도 다 봐야하니까)
          queue.push(element);
          console.log(element, "방문 함~ 현재 queue는", queue);
        } else {
          console.log(element, "에서 끊김");
        }
      });
      count++;
    }
    console.log("while문 끝 count는 ", count);

    return count;
  }

  // wires 값에 만든 함수에 값을 넣어 최솟값을 찾음.
  wires.forEach((element) => {
    let [a, b] = element;
    answer = Math.min(answer, Math.abs(searchTree(a, b) - searchTree(b, a)));
  });
  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
); // 3
