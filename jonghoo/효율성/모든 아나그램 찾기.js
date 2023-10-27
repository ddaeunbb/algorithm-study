function Anagram(map, str) {
  for (let x of str) {
    if (!map.has(x) || map.get(x) === 0) return false;
    else map.set(x, map.get(x) - 1);
  }
  return true;
}

function solution(str1, str2) {
  let right = 0;
  let count = 0;
  let answer = [];

  for (let i = 0; i <= str1.length - str2.length; i++) {
    let hasMap = new Map();
    for (x of str2) {
      if (hasMap.has(x)) {
        hasMap.set(x, hasMap.get(x) + 1);
      } else hasMap.set(x, 1);
    }
    let str = "";
    right = i;
    while (right - i <= 2 && right < str1.length) {
      str += str1[right];
      right++;
    }
    if (Anagram(hasMap, str)) count++, answer.push(str);
  }
  return count;
}

console.log(solution("bacaAacba", "abc"));
