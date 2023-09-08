// 14. 가장 긴 문자열
// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

// 내가 푼 문제
function solution(arr){
  let longest = [0, 0];
  for(let i = 0; i < arr.length; i++){
    if(longest[0] < arr[i].length) longest = [arr[i].length, i];
  }
  return arr[longest[1]];
}

function solution(arr){
  let answer, max = Number.MIN_SAFE_INTEGER;
  for(let x of arr){
    if(x.length > max){
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']));