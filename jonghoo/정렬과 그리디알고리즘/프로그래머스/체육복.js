function solution(n, lost, reserve) {
  let answer = n - lost.length;
  reserve.sort((a, b) => a - b);
  lost.sort((a, b) => a - b);



  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (Math.abs(lost[i] - reserve[j]) <= 1) {
        answer++;
        reserve.splice(j, 1); 
        break;
      }
    }
  }

  return answer;
}

console.log(solution(5,[2,4],[1,3,5]));