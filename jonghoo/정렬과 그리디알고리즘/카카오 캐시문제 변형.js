function solution(cash, project) {
  let arr = [];
  for (let i = 0; i < project.length; i++) {
    if (arr.indexOf(project[i]) !== -1) {
      [arr[0], arr[arr.indexOf(project[i])]] = [
        arr[arr.indexOf(project[i])],
        arr[0],
      ];
    }
    arr.unshift(project[i]);
    if (arr.length > cash) {
      arr.pop();
    }
  }
  return arr;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
