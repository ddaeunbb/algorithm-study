function solution(string) {
  let str = string.split("").reverse().join("");
  if (string.toUpperCase() === str.toUpperCase()) {
    return "YES";
  }
  return "NO";
}

console.log(solution("gooG"));

// https://www.freecodecamp.org/korean/news/how-to-reverse-a-string-in-javascript-in-3-different-ways/

