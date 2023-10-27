function solution(arr, money) {
  let count = 0;
  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    let a = Math.floor(money / arr[i]);
    money -= a * arr[i];
    count = count + a;
  }
  return count;
}

let coin = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000];

console.log(solution(coin, 4200)); // 출력: 6
console.log(solution(coin, 4790)); // 출력: 12
