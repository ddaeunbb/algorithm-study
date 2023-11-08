function solution(N, K) {
  let arr = [];
  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }
  while (arr.length) {
    for (let i = 0; i < K - 1; i++) {
      arr.push(arr.shift());
    }
    arr.shift();
    if (arr.length === 1) return arr.shift();
  }
}

console.log(solution(8, 3));
