function solution(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
    if (stack[stack.length - 1] == stack[stack.length - 2]) {
      stack.pop();
    }
  }
  return stack;
}
