function solution(nums) {
  let count = nums.length / 2;
  const dict = {};
  const answer = [];
  const copy = [...new Set(nums)];
  
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