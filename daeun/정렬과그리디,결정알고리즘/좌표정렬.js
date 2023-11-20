// 6. 좌표정렬
// N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램을 작성하 세요. 정렬기준은 먼저 x값의 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬합니다.

function solution(arr) {
  arr.sort((a,b)=> {
    if(a[0] - b[0] < 0) return -1;
    if(a[0] - b[0] === 0) return a[1] < b[1] ? -1 : 1;
  })
  return arr;
}

function solution(arr) {
  for(let i = 0; i < arr.length-1; i++){
    let idx = i;
    for(let j = i+1; j < arr.length; j++){
      if(arr[i][0] > arr[j][0]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]]
  }
  
  for(let i = 0; i < arr.length-1; i++){
    const j = i+1;
    if(arr[i][0] === arr[j][0] && arr[i][1] > arr[j][1]){
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}

console.log(solution([[2,7], [1,3], [1,2], [2,5], [3,6]]));