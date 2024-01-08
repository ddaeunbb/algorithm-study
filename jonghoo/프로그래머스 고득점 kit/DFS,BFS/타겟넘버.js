function solution(numbers, target) {
  let n = numbers.length;
  let answer = 0;

  function DFS(L, sum) {
    if (L === n) {
      if (sum === target) {
        answer++;
      }
    } else {
      DFS(L + 1, sum + numbers[L]);
      DFS(L + 1, sum - numbers[L]);
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
