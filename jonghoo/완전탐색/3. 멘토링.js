function solution(number, test, arr) {
  let answer = "";
  let whole = [];
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      if (i !== j) {
        whole.push([i, j]);
      }
    }
  }

  for (x of whole) {
    let count = 0;
    for (let i = 0; i < test; i++) {
      let mentoindex = arr[i].indexOf(x[0]);
      let mentiindex = arr[i].indexOf(x[1]);
      if (mentoindex < mentiindex) {
        count++;
      }
    }
    if (count === 3) {
      console.log(x, "매칭이성공됩니다.");
      count = 0;
    }
  }
}

solution(4, 3, [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
]);
