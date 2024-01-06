function solution(numbers, target) {
  let answer = 0;
  let n = numbers.length;
  
  function DFS(L, sum) {
    if(L === n && sum === target) answer++;
    if(L === n) return;
    else {
      DFS(L+1, sum + numbers[L]);
      DFS(L+1, sum - numbers[L]);
    }
  }

  DFS(0,0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3)) // 5
console.log(solution([4, 1, 2, 1], 4)) // 2