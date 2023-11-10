function solution(k, tangerine) {
  let sum = k;
  let answer = 0;
  const dict = {}
  
  for(let x of tangerine){
      if(!dict[x]) dict[x] = 1;
      else dict[x]+=1;
  }
  const arr = Object.entries(dict);
  arr.sort((a,b)=> b[1] - a[1]);
  console.log(arr)
  
  for(let i = 0; i < arr.length; i++){
      if(sum === 0) break;
      const [tanger, count] = arr[i];
      if(sum - count >= 0){
          answer++;
          sum -= count;
      } else if(sum < count){
          answer++;
          sum = 0;
      }
  }
  return answer
}