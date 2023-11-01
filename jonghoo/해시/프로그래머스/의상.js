function solution(clothes) {
  let hash = new Map();
  for (let i = 0; i < clothes.length; i++) {
    if (hash.has(clothes[i][1])) {
      hash.set(clothes[i][1], hash.get(clothes[i][1]) + 1);
    } else hash.set(clothes[i][1], 1);
  }
  let answer = 1;
  for (const clothes of hash.keys()) {
    answer *= hash.get(clothes) + 1;
  }
  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
