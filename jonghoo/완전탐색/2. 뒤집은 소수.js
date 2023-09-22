function isPrime(num) {
  if (num === 1) return false;
  // 반복문 수행 횟수를 줄였다
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

//https://peach-milk.tistory.com/entry/%EC%86%8C%EC%88%98-%EA%B5%AC%ED%95%98%EA%B8%B0-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8

function solution(arr) {
  let answer = "";
  let reversearr = [];
  for (x of arr) {
    reversearr.push(parseInt(String(x).split("").reverse().join("")));
  }
  for (x of reversearr) {
    if (isPrime(x)) {
      answer += x += " ";
    }
  }
  return answer;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
