function solution(arr) {
  let answer = [];

  function DFS(copyArr){
    if(copyArr.length === 1) answer.push(copyArr[0]);
    else {
      for(let i = 0; i < copyArr.length; i++){
        if(copyArr[i] === '+'){
          let num = Number(copyArr[i-1]) + Number(copyArr[i+1]);
          let copy = [...copyArr];
          copy.splice(i-1, i+2, num);
          console.log('+일때:', copy);
          DFS(copy);
        }
        if(copyArr[i] === '-') {
          let num = Number(copyArr[i-1]) - Number(copyArr[i+1]);
          let copy = [...copyArr];
          copy.splice(i-1, i+2, num);
          console.log('-일때:', copy);
          DFS(copy);
        }
      }
    }
  }

  DFS(arr);

  return Math.max(...answer);
}

function solution (arr) {
  // 피연산자의 개수
  const operandsCount = Math.ceil(arr.length / 2);
  const max_dp = new Array(operandsCount).fill().map(_ => new Array(operandsCount).fill(-Infinity));
  const min_dp = new Array(operandsCount).fill().map(_ => new Array(operandsCount).fill(Infinity));
  
  for(let i = 0; i < operandsCount; i++) {
    max_dp[i][i] = +arr[i*2];
    min_dp[i][i] = +arr[i*2];
  }
  
  for(let cnt = 1; cnt < operandsCount; cnt++) {
    for(let i = 0; i < operandsCount - cnt; i++) {
      const j = i + cnt;
      for(let k = i; k < j; k++) {
        if (arr[k*2+1] === '+') {
          max_dp[i][j] = Math.max(max_dp[i][j], max_dp[i][k] + max_dp[k+1][j]);
          min_dp[i][j] = Math.min(min_dp[i][j], min_dp[i][k] + min_dp[k+1][j]);
          console.log(max_dp);
          console.log(max_dp);
        } else {
          max_dp[i][j] = Math.max(max_dp[i][j], max_dp[i][k] - min_dp[k+1][j]);
          min_dp[i][j] = Math.min(min_dp[i][j], min_dp[i][k] - max_dp[k+1][j]);
        }
      }
    }
  }
  
  return max_dp[0][operandsCount-1];
}

solution(["1", "-", "3", "+", "5", "-", "8"]); // 1


// 아직 잘 이해가안감...
// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.4-%EC%82%AC%EC%B9%99%EC%97%B0%EC%82%B0