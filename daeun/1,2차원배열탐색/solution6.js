// 6. 격자판 최대합
// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

// 내가 푼 풀이
function solution(arr){
  let answer = Number.MIN_SAFE_INTEGER;
  let sum1 = 0, sum2 = 0;
  let sum3 = 0, sum4 =0;
  let max = 0;
  
  // 행과 열의 합 확인
  for(let i=0; i<arr.length; i++){
    sum1=sum2=0;
    for(let j=0; j<arr.length; j++){
      sum1+=arr[i][j];
      sum2+=arr[j][i];
    }
    answer=Math.max(answer, sum1, sum2);
  }
  
  // 대각선의 합확인 (왼쪽)
  for(let i=0; i<arr.length; i++){
    for(let j=i; j<=i; j++){
      sum3+= arr[i][j];
    }
  }
  answer=Math.max(answer, sum3);

  // 대각선의 합확인 (오른쪽)
  for(let i=0; i<arr.length; i++){
    for(let j=arr.length-1-i; j<arr.length-i; j++){
      sum4+= arr[i][j];
    }
  }
  answer=Math.max(answer, sum4);

  return answer;
}


function solution(arr){
  let answer = Number.MIN_SAFE_INTEGER;
  let sum1 = 0, sum2 = 0;
  let sum3 = 0, sum4 =0;
  let max = 0;
  
  // 행과 열의 합 확인
  for(let i=0; i<arr.length; i++){
    sum1=sum2=0;
    for(let j=0; j<arr.length; j++){
      sum1+=arr[i][j];
      sum2+=arr[j][i];
    }
    answer=Math.max(answer, sum1, sum2);
  }
  
  // 대각선의 합확인
  for(let i=0; i<arr.length; i++){
      sum3+= arr[i][i];
      sum4+= arr[i][n-i-1];
  }
  answer=Math.max(answer, sum3, sum4);

}

console.log(solution([[10,13,10,12,15],[12,39,30,23,11],[11,25,50,53,15],[19,27,29,37,27],[19,13,30,13,19]]));