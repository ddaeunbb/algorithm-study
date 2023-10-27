function solution(participant, completion) {
  var answer = "";
  let hashmap = new Map();
  for (x of participant) {
    if (hashmap.has(x)) {
      hashmap.set(x, hashmap.get(x) + 1);
    } else hashmap.set(x, 1);
  }
  for (x of completion) {
    if (hashmap.has(x)) {
      hashmap.set(x, hashmap.get(x) - 1);
    }
  }
  hashmap.forEach((value, key, map) => {
    if (value === 1) {
      answer = key;
    }
  });
  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
