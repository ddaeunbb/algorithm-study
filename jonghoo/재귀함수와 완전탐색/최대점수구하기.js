function solution(limit, arr) {
  let check = Array.from({ length: arr.length }, () => 0);
  let answer = 0;
  function DFS(n) {
    let score = 0;
    let time = 0;
    if (n == arr.length) {
      for (let i = 0; i < arr.length; i++) {
        if (check[i] == 1) {
          score += arr[i][0];
          time += arr[i][1];
        }
      }
      if (limit >= time) {
        answer = Math.max(answer, score);
      }
    } else {
      check[n] = 1;
      DFS(n + 1);
      check[n] = 0;
      DFS(n + 1);
    }
  }
  DFS(0);
  return answer;
}

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);

// function solution(m, ps, pt) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let n = ps.length;
//   function DFS(L, sum, time) {
//     if (time > m) return;
//     if (L === n) {
//       answer = Math.max(answer, sum);
//     } else {
//       DFS(L + 1, sum + ps[L], time + pt[L]);
//       DFS(L + 1, sum, time);
//     }
//   }

//   DFS(0, 0, 0);
//   return answer;
// }

// let ps = [10, 25, 15, 6, 7];
// let pt = [5, 12, 8, 3, 4];
// console.log(solution(20, ps, pt));
