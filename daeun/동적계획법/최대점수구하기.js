// DFS로 풀어보기
// const solution = (m, ps, pt) => {
//   let answer = 0;

//   function DFS(v, sum, time) {
//     if(time > m) return;
//     if(v === ps.length) answer = Math.max(answer, sum);
//     else {
//       DFS(v + 1, sum + ps[v], time + pt[v]);
//       DFS(v + 1, sum, time);
//     }
//   }

//   DFS(0, 0, 0);

//   return answer;
// };

// let ps = [10, 25, 15, 6, 7];
// let pt = [5, 12, 8, 3, 4];
// console.log(solution(20, ps, pt)); // 41

function solution(m, arr) {
  let answer = 0;
  let dy = Array.from({length: m + 1}, () => 0);

  for(let i = 0; i < arr.length; i++){
    let ps = arr[i][0];
    let pt = arr[i][1];

    for(let j = m; j >= pt; j--){
      dy[j] = Math.max(dy[j], dy[j-pt] + ps);
    }
  }

  answer = dy[m];
  return answer;
}

console.log(solution(20, [[10, 5],[25, 12],[15, 8], [6,3] ,[7, 4]]));



