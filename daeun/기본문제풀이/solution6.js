// 6. 홀수
// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요. 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53, 85 이므로 77 + 41 + 53 + 85 = 256 이 되고, 41 < 53 < 77 < 85 이므로 홀수들 중 최소값은 41이 된다.
// 첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.

// 내가 푼 답안
function solution(arr){
  let min;
  let sum = 0;
  for(el of arr){
    if(el % 2 === 1){
      sum+= el;
      if(min ===  undefined) min = el;
      if(min !== undefined && min > el) min = el;
    }
  }
  console.log(sum);
  console.log(min);
}

// 답안
// function solution(arr){
//   let answer=[];
//   let sum=0, min=1000;
//   for(let x of arr){
//       if(x%2===1){
//           sum+=x;
//           if(x<min) min=x;
//       }
//   }
//   answer.push(sum);
//   answer.push(min);     
//   return answer;
// }

console.log(solution([12,77,38,41,53,92,85]));
