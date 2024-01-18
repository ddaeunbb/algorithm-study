function solution(arr) {
  let n = arr.length;
  let memo = Array.from({ length: n }, () => 0); // 메모이제이션을 위한 배열
  let temp = [];

  function DFS(L) {
    if (memo[L] !== 0) {
      return memo[L];
    }

    let count = 1; // 현재 원소도 포함하므로 1로 시작
    for (let i = L + 1; i < n; i++) {
      if (arr[L] < arr[i]) {
        count = Math.max(count, 1 + DFS(i));
      }
    }

    memo[L] = count; // 메모이제이션
    return count;
  }

  for (let i = 0; i < n; i++) {
    temp.push(DFS(i));
  }

  return Math.max(...temp);
}

console.log(solution([2, 7, 5, 8, 6, 4, 7, 12, 3]));
console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));

// 강의 솔루션

function solution2(arr) {
  let answer = 0;
  let n = arr.length;
  let dy = Array.from({ length: n }, () => 0);
  dy[0] = 1;
  for (let i = 1; i < n; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }
  return answer;
}
