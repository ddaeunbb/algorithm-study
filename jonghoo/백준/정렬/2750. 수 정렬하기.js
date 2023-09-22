function solution(arr) {
  let set = new Set([...arr]);
  let newarr = Array.from(set);
  return newarr.sort((a, b) => a - b);
}

console.log(solution([5, 5, 2, 3, 4, 1]));
