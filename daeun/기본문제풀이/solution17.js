// 17. 중복단어제거
// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요. 출력하는 문자열은 원래의 입력순서를 유지합니다.

// 내가 푼 문제
function solution(arr){
  let answer = [];
  for(let el of arr){
    if(answer.indexOf(el) === -1) answer.push(el);
  }
  return answer;
}

// 정답
function solution(arr){
  let answer;
  answer = arr.filter((el, idx)=> arr.indexOf(el) === idx
)
  return answer;
}

console.log(solution(['good', 'time', 'good', 'time', 'student']));