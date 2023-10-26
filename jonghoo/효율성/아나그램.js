function solution(str1, str2) {
  let hashMap1 = new Map();
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (hashMap1.has(char)) {
      hashMap1.set(char, hashMap1.get(char) + 1);
    } else {
      hashMap1.set(char, 1);
    }
  }

  let hashMap2 = new Map();
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (hashMap2.has(char)) {
      hashMap2.set(char, hashMap2.get(char) + 1);
    } else {
      hashMap2.set(char, 1);
    }
  }

  const mapStr1 = JSON.stringify(Array.from(hashMap1));
  const mapStr2 = JSON.stringify(Array.from(hashMap2));

  if (mapStr1 === mapStr2) {
    return "YES";
  } else return [hashMap1, hashMap2];
}

console.log(solution("AbaAeCe", "baeeACA"));
