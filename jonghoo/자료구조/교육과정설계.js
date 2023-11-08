function solution(str1, str2) {
  let index1 = 0;
  let index2 = 0;

  while (index1 < str1.length && index2 < str2.length) {
    if (str1[index1] === str2[index2]) {
      index1++;
    }
    index2++;
  }

  if (index1 === str1.length) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(solution("CBA", "CBDAGE"));
