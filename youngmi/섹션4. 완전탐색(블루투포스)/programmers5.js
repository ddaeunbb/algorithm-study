// function solution(k, dungeons) {
//   let results = [];

//   const isPossible = (arr, k) => {
//     if (k >= arr[0]) return true;
//     else return false;
//   };

//   const getPermutation = (arr, k) => {
//     console.log(arr, k);
//     if (arr.length > 0) {
//       for (let i = 0; i < arr.length; i++) {
//         // 이번 재귀 고정 던전
//         const newFix = arr[i];
//         // 다음 재귀에 넘길 던전 배열 (즉 지금 고정인 던전 제외)
//         const copyArr = [...arr];
//         copyArr.splice(i, 1);

//         if (isPossible(newFix, k)) {
//           results.push(1);
//           console.log("탐험 성공");
//         } else {
//           results.push(0);
//           console.log("탐험 불가");
//         }

//         getPermutation(copyArr, k - newFix[1]);
//       }
//     }
//   };

//   getPermutation(dungeons, k);

//   let answer = 0;
//   let temp = 0;

//   for (let i = 0; i < results.length; i++) {
//     if (results[i] !== 0) {
//       temp++;
//     } else {
//       if (temp > answer) {
//         answer = temp;
//       }
//       temp = 0;
//     }
//   }
//   return answer;
// }

// function solution(k, dungeons) {
//   let answer = [];
//   // 방문 확인용 배열
//   let visited = Array(dungeons.length).fill(false);

//   function dfs(count, k) {
//     answer.push(count);

//     for (let i = 0; i < dungeons.length; i++) {
//       let current = dungeons[i];
//       if (k >= current[0] && !visited[i]) {
//         visited[i] = 1;
//         dfs(count + 1, k - current[1]);
//         visited[i] = 0;
//       }
//     }
//   }

//   dfs(0, k);

//   return Math.max(...answer);
// }

const solution = (k, dungeons) => {
  let answer = 0;
  // 방문했는지 확인하기 위한 배열
  const visited = Array.from({ length: dungeons.length }, () => false);

  // 완전탐색을 위한 DFS(남은 피로도, 진행단계)
  function DFS(hp, L) {
    console.log("dfs 시작!", `hp는 ${hp} L은 ${L}`);
    // 던전의 수 만큼 반복한다.
    for (let i = 0; i < dungeons.length; i++) {
      // 방문하지 않았고 현재 남은 피로도가 최소 필요도 보다 크거나 같으면 실행
      if (!visited[i] && dungeons[i][0] <= hp) {
        console.log(
          `이곳 ${dungeons[i]} 던전은 방문한 적 없고 갈 수 있는 던전입니다. 방문 처리 하고 새 dfs 들어갑니다.`
        );
        // 현재 들어온 던전을 방문 처리
        visited[i] = true;

        // DFS(현재 피로도 - 방문 던전, 진행단계 + 1)
        DFS(hp - dungeons[i][1], L + 1);

        // DFS 종료 후 방문을 끝내준다.
        visited[i] = false;
        console.log(i, " dfs 종료 L값은", L, "현재 체력은 ", hp);
      }
      console.log(
        `이곳 ${dungeons[i]}던전은 방문했거나 피로도 부족으로 갈 수 없습니다.`
      );
    }

    // 가장 깊이 들어간 진행단계를 answer에 넣어준다.
    answer = Math.max(answer, L);
    console.log("한개의 DFS 탈출! 현재 L은", L);
  }

  DFS(k, 0);

  return answer;
};

// console.log(
//   solution(40, [
//     [40, 20],
//     [10, 10],
//     [10, 10],
//     [10, 10],
//     [10, 10],
//   ])
// );

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
