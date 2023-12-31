// 7. 봉우리
// 지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요. 격자의 가장자리는 0으로 초기화 되었다고 가정한다. 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.

// 내가 푼 문제
function solution(arr){
  let top = [];
  let dict = {
    L: [0,-1],
    R: [0,1],
    U: [1,0],
    D: [-1,0]
  }

  let answer = [];

  // [5,3,7,2,3],[3,7,1,6,1],[7,2,5,3,4],[4,3,6,4,1],[8,7,3,5,2]]
  for(let i = 0; i <arr.length; i++){
    let left, right, up, down;
    for(let j =0; j < arr.length; j++){
      if(j + dict['L'][1] < 0) left = 0;
      else left = arr[i][j + dict['L'][1]];

      if(j + dict['R'][1] >= arr.length) right = 0;
      else right = arr[i][j + dict['R'][1]];

      if(i + dict['U'][0] >= arr.length) up = 0;
      else up = arr[i + dict['U'][0]][j];

      if(i + dict['D'][0] < 0) down = 0;
      else down = arr[i + dict['D'][0]][j];
    }
    let arr = [left, right, up, down];
    let max = Math.max(...arr);
    let findIdx = arr.indexOf(max);

    if(findIdx === 0) answer.push(String(i) + String(j + dict['L'][1]))
    if(findIdx === 1) answer.push(String(i) + String(j + dict['R'][1]))
    if(findIdx === 2) answer.push(String(i) + String(j + dict['R'][1]))
    if(findIdx === 3) answer.push(String(i) + String(j + dict['R'][1]))
  }
  return answer.length;
}


// 정답
function solution(arr){  
  let answer=0;
  let n=arr.length;
  let dx=[-1, 0, 1, 0];
  let dy=[0, 1, 0, -1];
  for(let i=0; i<n; i++){
      for(let j=0; j<n; j++){
          let flag=1;
          for(let k=0; k<4; k++){
              let nx=i+dx[k];
              let ny=j+dy[k];
              if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny]>=arr[i][j]){
                  flag=0;
                  break;
              }
          }
          if(flag) answer++;
      }
  }  
    
  return answer;
}

console.log(solution([[5,3,7,2,3],[3,7,1,6,1],[7,2,5,3,4],[4,3,6,4,1],[8,7,3,5,2]]));

