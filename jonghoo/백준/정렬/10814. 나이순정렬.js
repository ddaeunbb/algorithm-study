function solution(arr) {
  return arr.sort(function (a, b) {
    if (a[0] !== b[0]) return a[0] - b[0];
  });
}

console.log(
  solution([
    [21, "JunKyu"],
    [21, "Dohyun"],
    [20, "Sunyoung"],
  ])
);
