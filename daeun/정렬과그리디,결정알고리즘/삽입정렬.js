// 4. 삽입 정렬
// N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 삽입정렬입니다.

function solution(arr) {
  const answer = arr;
  for(let i = 0; i < arr.length; i++){
    let tmp = arr[i], j;
    for(j = i-1; i >= 0; j--){
      if(arr[j] > tmp) arr[j+1] = arr[j];
      else break;
    }
    arr[j+1] = tmp;
  }
  return answer;
}

console.log(solution([11, 7, 5, 6, 10, 9]));