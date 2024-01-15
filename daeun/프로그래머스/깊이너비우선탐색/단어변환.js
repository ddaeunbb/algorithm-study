function countDiff(stand, word) {
  let count = 0;

  for(let i = 0; i < stand.length; i++){
    if(count > 1) break; 
    if(stand[i] !== word[i]) count++;
  }
  return count;
}

function solution(begin, target, words) {
  let answer = Number.MAX_SAFE_INTEGER;
  if(!words.includes(target)) return 0;

  let visited = [];

  function DFS(nextWord, count) {
    if(nextWord === target) answer = Math.min(answer, count);
    else {
      for(let i = 0; i < words.length; i++){
        if(!visited[i] && words[i] !== nextWord && countDiff(nextWord, words[i]) === 1){
          visited[i] = 1;
          DFS(words[i], count+1);
          visited[i] = 0;
        }
      }
    }
  }

  DFS(begin, 0);

  return answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])) // 0