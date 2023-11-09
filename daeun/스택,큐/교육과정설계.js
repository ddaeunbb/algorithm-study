function solution(classStr, arr){
  const queue = classStr.split('');
  for(let x of arr){
    if(x === queue[0]) queue.shift();
  }
  return queue.length === 0 ? 'YES' : 'NO';
}

function solution(need, plan){
  let answer = 'YES';
  let queue = plan.split('');
  for(let x of plan){
    if(queue.includes(x)){
      if(x !== queue.shift()) return 'NO';
    }
  }
  if(queue.length > 0) return 'NO';
  return answer;
}

console.log(solution('CBA', 'CBDAGE'));