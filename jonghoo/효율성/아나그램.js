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

  const arrmap1 = [...hashMap1].sort((a, b) => a[0].localeCompare(b[0]));
  const arrmap2 = [...hashMap2].sort((a, b) => a[0].localeCompare(b[0]));

  if (arrmap1.toString() === arrmap2.toString()) {
    return "YES";
  } else return "NO";
}

console.log(solution("AbaAeCe", "baeeACA"));
