function solution(arr) {
  arr.sort((a, b) => b - a);

  let hindex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= i + 1) {
      hindex = i + 1;
    } else {
      break;
    }
  }

  return hindex;
}

console.log(solution([3, 0, 6, 1, 5]));
