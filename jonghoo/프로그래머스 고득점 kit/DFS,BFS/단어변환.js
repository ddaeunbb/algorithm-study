// let a = "hot";
// let b = "dot";

// for (let i = 0; i < a.length; i++) {
//   if (a[i] == b[i]) {
//     console.log("같아!");
//   }
// }
function checkword(x, y) {
  let n = x.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (x[i] == y[i]) count++;
  }
  return count === n - 1;
}

function solution(begin, target, words) {
  let queue = [];
  queue.push({ word: begin, depth: 0 });
  let visited = new Set();
  visited.add(begin);

  while (queue.length) {
    let { word, depth } = queue.shift();

    for (let i = 0; i < words.length; i++) {
      if (!visited.has(words[i]) && checkword(word, words[i])) {
        if (words[i] === target) return depth + 1;
        queue.push({ word: words[i], depth: depth + 1 });
        visited.add(words[i]);
      }
    }
  }

  return 0;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
