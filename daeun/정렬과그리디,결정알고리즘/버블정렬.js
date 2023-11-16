// 2. 버블정렬
// N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 버블정렬입니다.
// 시간복잡도: n(O^2) 

// function solution(arr){
//   let answer = arr;
//   for(let i = 0; i < arr.length-1; i++){
//     for(let j = i + 1; j < arr.length; j++){
//       if(arr[i] > arr[j]){
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }
//   return answer;
// }

function solution(arr) {
  let answer = arr;
  for(let i = 0; i < arr.length-1; i++){
    for(let j = 0; j < arr.length-i-1; j++){
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return answer;
}

console.log(solution([13, 5, 11, 7, 23, 15]));