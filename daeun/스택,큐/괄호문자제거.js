// 2. 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.

function solution(str){
  const stack = [];
  const arr = str.split('');

  for(let el of arr){
    stack.push(el);
    if(el === ')'){
      const idx = stack.lastIndexOf('(');
      stack.splice(idx, stack.length);
    }
  }
  return stack.join('');
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));

// 정답
function solution(s){
  const stack = [];
  for(let x of s){
    if(x === ')'){
      while(stack.pop() !== '(');
    } else stack.push(x)
  }
  return stack.join('');
}