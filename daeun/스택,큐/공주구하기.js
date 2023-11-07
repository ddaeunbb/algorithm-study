function solution(n, k){
  const arr = Array(n).fill(1).map((el,idx)=> el+idx);
  let check = 0;
  let idx = -1;
  while(arr.length !== 1){
    check += 1; 
    idx += 1;
    if(idx >= arr.length) idx = 0;
    if(check === k){
      arr.splice(idx, 1);
      check = 0;
      idx -= 1;
    }
  }
  return arr[0];
}

function solution(n, k){
  let answer;
  let queue = Array.from({length: n}, (v,i)=> i+1);
  while(queue.length){
    for(let i = 1; i<k; i++) queue.push(queue.shift());
    queue.shift();
    if(queue,length === 1) answer = queue.shift();
  }
  return answer
}

console.log(solution(8,3));