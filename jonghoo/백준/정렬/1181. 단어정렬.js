function solution(arr) {
  return arr.sort(function (a, b) {
    if (a.length === b.length) {
      return a - b;
    } else {
      return a.length - b.length;
    }
  });
}

console.log(solution(["but", "i", "wont", "hesitate", "no"]));
