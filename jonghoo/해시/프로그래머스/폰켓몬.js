function solution(nums) {
  let pick = nums.length / 2;
  let pocketmap = new Map();
  for (let x of nums) {
    if (pocketmap.has(x)) {
      pocketmap.set(x, pocketmap.get(x) + 1);
    } else pocketmap.set(x, 1);
  }
  if (pocketmap.size >= pick) return pick;
  else if (pocketmap.size < pick) return pocketmap.size;
}

console.log(solution([3, 1, 2, 3]));
