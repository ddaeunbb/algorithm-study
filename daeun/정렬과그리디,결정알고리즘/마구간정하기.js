function count(mid, arr) {
  let cnt = 1; ep = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] - ep >= mid){
      cnt++;
      ep = arr[i];
    } 
  }
  return cnt;
}

function solution(n, arr) {
  let answer;
  arr.sort((a,b)=> a-b);
  let lt = 1, rt = arr[arr.length -1];
  
  while(lt <= rt){
    let mid = Math.floor((lt + rt) / 2);
    if(count(mid, arr) >= n){
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
    console.log(mid);
  }
  return answer;
}

console.log(solution(3, [1,2,8,4,9])); // 3 