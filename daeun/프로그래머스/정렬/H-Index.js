// H-Index

// 내가 푼 풀이
function solution(citations) {
  let max = citations.length;
  let count = 0;
  
  for(let i = 1; i <= max; i++){
      for(let citation of citations){
          if( citation >= i) count++;
      }
      
      if(count === i) break;
      else count = 0;
  }
  return count;
}

// 통과된 내 풀이
function solution(citations) {
  let max = citations.length;
  let count = 0;
  
  // [25,8,5,3,3]
  for(let i = 1; i <= max; i++){
      for(let citation of citations){
          if( citation >= i) count++;
      }
      if(count < i) return i-1;
      else if(count === i) return i 
      else count = 0;
  }
  return count;
}


// 영미님과 종후님 풀이
function solution(citations){
  let sortArr = citations.sort((a,b)=>b-a);
  let answer = 0;

  for(let i = 0; i < sortArr.length; i++){
    if (sortArr[i] < i + 1) {
      break;
    } else {
      answer++;
    }
  }
  return answer;
}