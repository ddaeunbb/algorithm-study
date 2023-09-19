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

function solution(citations) {
  citations.sort((a,b)=> b-a);
  for (let i =0 ; i < citations.length; i++){
      if( i >= citations[i]) return i
  }
  return citations.length;
}
