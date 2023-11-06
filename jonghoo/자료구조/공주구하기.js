function solution(N, K) {
  let array = [];
  for (let i = 1; i <= N; i++) {
    array.push(i);
  }
  while (array.length > 1) {
    for (let i = 1; i < K; i++) array.push(array.shift());
    array.shift();
    if (array.length == 1) {
      return array.shift();
    }
  }
}

console.log(solution(8, 3));
