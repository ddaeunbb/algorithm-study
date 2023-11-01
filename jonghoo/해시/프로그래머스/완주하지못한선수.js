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

function solution1(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);

    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }
}

console.log(solution1(["leo", "kiki", "eden"], ["eden", "kiki"]));
