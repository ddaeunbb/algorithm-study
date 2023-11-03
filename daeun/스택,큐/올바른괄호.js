// 1. 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
// (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.

function solution(str){
  const stack = [];
  const arr = str.split('');
  
  for(let el of arr){
    if(el === '(') stack.push(el);
    else {
      const output = stack.pop();
      if(output !== '(') stack.push(output);
    }
  }

  return stack.length > 0 ? 'NO' : 'YES'
}

console.log(solution('(()(()))(()'));

// 정답
function solution(s){
  let answer = "YES";
  const stack = [];
  for(let x of s){
    if(x === '(') stack.push(x);
    else {
      if(stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  return answer;
}