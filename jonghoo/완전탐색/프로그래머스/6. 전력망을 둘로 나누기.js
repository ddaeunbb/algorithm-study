function solution(n, wires) {
  let tree = Array.from(Array(n + 1), () => []);
  wires.map((element) => {
    let [a, b] = element;

    tree[a].push(b);
    tree[b].push(a);
  });
  return tree;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
);
