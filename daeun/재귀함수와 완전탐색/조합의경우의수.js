function solution(n, r) {
  let answer;
  let dy = Array.from(Array(35), () => Array(35).fill(0));
  function DFS(n, r) {
    if(dy[n][r] > 0) return dy[n][r];
    if(n === r || r === 0) return 1;
    else return dy[n][r] = DFS(n-1, r-1) + DFS(n-1, r);
  }

  answer = DFS(n,r);
  return answer;
}

// function solution(n, r) {
//   let answer = [];
//   let check = Array.from({length: n}, () => 0);
//   let tmp = Array.from({length : r }, ()=> 0);

  
//   function DFS(L) {
//     if(L === r) answer.push(tmp.slice());
//     else {
//       for(let i = 0; i < n; i++) {
//         if(check[i] === 0) {
//           check[i] = 1;
//           tmp[L] = i+1;
//           DFS(L+1);
//           check[i] = 0;
//         }
//       }
//     }
//   }
//   DFS(0);
//   return answer
// }


console.log(solution(5, 3));
console.log(solution(33, 19));