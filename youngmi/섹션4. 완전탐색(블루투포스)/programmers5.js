function solution(k, dungeons) {
  let results = [];

  const isPossible = (arr, k) => {
    if (k >= arr[0]) return true;
    else return false;
  };

  const getPermutation = (arr, k) => {
    console.log(arr, k);
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        // 이번 재귀 고정 던전
        const newFix = arr[i];
        // 다음 재귀에 넘길 던전 배열 (즉 지금 고정인 던전 제외)
        const copyArr = [...arr];
        copyArr.splice(i, 1);

        if (isPossible(newFix, k)) {
          results.push(1);
          console.log("탐험 성공");
        } else {
          results.push(0);
          console.log("탐험 불가");
        }

        getPermutation(copyArr, k - newFix[1]);
      }
    }
  };

  getPermutation(dungeons, k);

  let answer = 0;
  let temp = 0;

  for (let i = 0; i < results.length; i++) {
    if (results[i] !== 0) {
      temp++;
    } else {
      if (temp > answer) {
        answer = temp;
      }
      temp = 0;
    }
  }
  return answer;
}

console.log(
  solution(40, [
    [40, 20],
    [10, 10],
    [10, 10],
    [10, 10],
    [10, 10],
  ])
);

/* function solution(k, dungeons) {
  let answer = [];
  let visited = Array(dungeons.length).fill(false);

  function dfs(count, k) {
    answer.push(count);

    for (let i = 0; i < dungeons.length; i++) {
      let current = dungeons[i];
      if (k >= current[0] && !visited[i]) {
        visited[i] = 1;
        dfs(count + 1, k - current[1]);
        visited[i] = 0;
      }
    }
  }

  dfs(0, k);

  return Math.max(...answer);
} */
