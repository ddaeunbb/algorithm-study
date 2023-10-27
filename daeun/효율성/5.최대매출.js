// 5. 현수의 아빠는 제과점을 운영합니다. 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
// 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면
// [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]
// 연속된 3일간의 최대 매출액은 11+20+25=56만원입니다. 여러분이 현수를 도와주세요.

// 내가 쓴 답안
function solution(k, arr){
  let sum = 0, lt = 0;
  let answer = [];
  for(let rt = 0; rt < arr.length; rt++){
    sum += arr[rt];
    while(rt - lt < k-1){
      sum += arr[++rt];
    }
    answer.push(sum);
    sum -= arr[lt];
    lt++;
  }
  return Math.max(...answer);
}

// 강사님 답안
function solution(k, arr){
  let answer, sum = 0;
  for(let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for(let i = k; i < arr.length; i++){
    sum+=(arr[i]-arr[i-k]);
    answer = Math.max(answer, sum);
  }
  return answer;
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));