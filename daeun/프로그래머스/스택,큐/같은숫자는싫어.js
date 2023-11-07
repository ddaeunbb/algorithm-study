function solution(arr){
  const stack = [];
  for(let x of arr){
      if(stack[stack.length-1] !== x) stack.push(x)
  }
  return stack;
}

function solution(arr){
  return arr.filter((item,idx) => item === arr[idx + 1] ? false : true)
}