/* 주식가격
문제 설명
초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 
가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.

제한사항
- prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
- prices의 길이는 2 이상 100,000 이하입니다. */

const solution = (prices) => {
  // 하나 뽑아서 나머지들이랑 비교
  // 가격 떨어지면 비교 멈추고 새로 뽑기
  // 다시 새로 뽑은 거랑 나머지들이랑 비교
  let answer = [];

  while (prices.length) {
    let count = 0;
    const cur = prices.shift();
    for (let price of prices) {
      console.log(prices);
      if (cur <= price) {
        count++;
      } else {
        count++;
        break;
      }
    }
    answer.push(count);
  }

  return answer;

  // reference
  /* 
    const answer = [];
    for (let i = 0; i < prices.length; i++) {
        let stack = 0;
        for (let j = i + 1; j < prices.length; j++) {
            stack++;
            if (prices[i] > prices[j]) {
                break;
            }
        }
        answer.push(stack);
    }
    return answer; 
	*/
};

let prices = [1, 2, 3, 2, 3];
console.log(solution(prices)); // [4, 3, 1, 1, 0]
