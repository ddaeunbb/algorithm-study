// 20.5점 맞았던 풀이...
function solution(distance, rocks, n) {
  rocks.sort((a,b)=> a-b);
  
  // 각 바위 간의 거리 구하기
  rocks.unshift(1);
  rocks.push(distance);
  const rockDist = [2,9,3,3,4,4];
  rocks.forEach((rock, i) => {
      if(i !== rocks.length - 1) rockDist.push(Math.abs(rocks[i+1] - rock))
  })

  // 최솟값 돌면서 제거하기
  while(n > 0){
      const min = Math.min(...rockDist); // 2
      const idx = rockDist.indexOf(min);
      let remove = rockDist.splice(idx, 1);
      
      if(idx !== (rockDist.length-1)){
        rockDist[idx+1] += remove[0];
      } else rockDist[idx-1] += remove[0];
      n--;
  }
  return Math.min(...rockDist)
}

// 정답
function solution(distance, rocks, n) {
  let answer = 0;
  // [0, 2, 11, 14, 17, 21, 25]
  rocks=[0,...rocks.sort((a,b)=>a-b),distance];
  
  // 0, 25
  let start=0, end = rocks[rocks.length-1];
  while(start<=end){
    let mid=Math.floor((start+end)/2);
    // count는 mid보다 작은 거리개수
    // now는 0부터 시작
    let count=0, now=0;
    for(let i = 1; i < rocks.length; i++){
      console.log('각 거리 구한거: ' + `${rocks[i] - now}`)
      console.log('현재 미드: ' + `${mid}`)
  
      if(rocks[i] - now < mid) count++;   
      else now = rocks[i];
    }      
    
    console.log('총 개수: ' + `${count}`)
    if(count > n) end = mid-1;
    else start = mid+1;
    answer = end;
  }
  return answer;
}

solution(25, [2, 14, 11, 21, 17], 2); //4