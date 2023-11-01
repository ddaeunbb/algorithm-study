function solution(nums) { // [3,3,3,2,2,4]
  let count = nums.length / 2;
  const answer = [];
  const copy = [...new Set(nums)]; //[ 3, 2 ,4]
  
  for(let i = 0; i < copy.length; i++){
      if(count === 0) break;
      answer.push(copy[i]);
      count--;
  }
  return answer.length
}

function solution(nums){
  let length = nums.length;
  let pick = length / 2;
  const copy = [...new Set(nums)].length;

  if (copy < pick) return copy;
  else return pick;
}