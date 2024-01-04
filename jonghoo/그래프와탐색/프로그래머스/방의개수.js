function solution(arrows) {
  let object = { 0: [0, 1], 1: [1, 1], 2: [1, 0], 3: [1, -1], 4: [0, -1], 5: [-1, -1], 6: [-1, 0], 7: [-1, 1] };
  let answer = [];
  let a = 0;
  let b = 0;
  answer.push([a, b]);
  for (const x of arrows) {
    a = a + object[x][0];
    b = b + object[x][1];
    answer.push([a, b]);
  }
  return answer;
}

console.log(solution([6, 6, 6, 4, 4, 4, 2, 2, 2, 0, 0, 0, 1, 6, 5, 5, 3, 6, 0]));
