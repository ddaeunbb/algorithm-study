function solution(s) {
  let copy = s.split('');
  let answer = checkBracket(copy) ? 1: 0; 
  for(let i = 1; i < s.length; i++){
    let first = copy.shift();
    copy.push(first);
    if(checkBracket(copy)) answer++;
  }
  return answer
}

function checkBracket(arr) {
  const stack = [];
  for(let x of arr){
    if( stack.length === 0 || x === '[' || x === '(' || x === '{') stack.push(x);
    else {
      const last = stack[stack.length-1];
      if(last === '{' && x === '}') stack.pop();
      if(last === '[' && x === ']') stack.pop();
      if(last === '(' && x === ')') stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(solution("[](){}"))
console.log(solution("}]()[{"))
console.log(solution("[)(]"))
console.log(solution("}}}"))