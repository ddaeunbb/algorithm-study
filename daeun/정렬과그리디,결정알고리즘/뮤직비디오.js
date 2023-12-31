function count(songs, capacity) {
  let cnt = 1, sum = 0;
  for(let x of songs){
    if(sum + x > capacity){
      cnt++;
      sum=x;
    }
    else sum += x;
  }
}

function solution(m, songs) {
  let answer = 0;
  let lt = Math.max(...songs); rt = songs.reduce((acc,cur) => acc + cur, 0);
  while(lt <= rt){
    let mid = parseInt((lt + rt) /2);
    if(count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    }
    else lt = mid + 1;
  }
  return answer;
}

solution(3, [1,2,3,4,5,6,7,8,9]);