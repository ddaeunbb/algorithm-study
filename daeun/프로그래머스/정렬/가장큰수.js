// 가장 큰 수

// 내가 푼 풀이
function solution(numbers){
  let copy = [...numbers].sort();
  
}

// 정답
function solution(numbers) {
  const answer = numbers.map(String).sort((a,b)=> (b+a) - (a+b)).join('');
  return answer[0] === '0' ? '0' : answer;
}