function solution(elements) {
  var answer = [];
  const copy = [...elements];
  copy.push(elements[0]);
  for(let i = 0; i < copy.length; i++){
      for(let j = 1; j <= copy.length; j++){
          let result = sum(i, j, copy);
          answer.push(result);
      }
  }
  return new Set(answer).size + 1
}

function sum(idx, len, arr){
  let sum = 0;
  for(let i = idx; i < arr.length; i++){
      if(len >= 1){
          sum+= arr[i];
          len--;
      }
      else break;
  }
  return sum;
}


// 
function solution(elements) {
  const set = new Set();
  const n = elements.length;
  const arr = [...elements, ...elements.slice(0, n - 1)];
  
  for(let i = 1; i <= n; i++){
      for(let j = 0; j < n; j++){
          const sum = arr.slice(j, j+i).reduce((acc,cur)=> acc+cur, 0);
          set.add(sum);
      }
  }
  return set.size
}