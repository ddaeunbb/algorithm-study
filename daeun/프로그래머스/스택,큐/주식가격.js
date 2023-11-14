function solution(prices) {
  const answer = [];
  for (let i = 0; i < prices.length; i++) {
      let stack = 0;
      for (let j = i + 1; j < prices.length; j++) {
          stack++;
          console.log(stack);
          if (prices[i] > prices[j]) {
              break;
          }
      }
      answer.push(stack);
  }
  return answer;
}

solution([1, 2, 3, 2, 3])