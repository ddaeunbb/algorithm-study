function solution(prices) {
  let answer = [];
  const n = prices.length;

  for (let i = 0; i < n; i++) {
    let count = 0;

    for (let j = i + 1; j < n; j++) {
      if (prices[i] <= prices[j]) count++;
    }

    answer.push(count);
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
