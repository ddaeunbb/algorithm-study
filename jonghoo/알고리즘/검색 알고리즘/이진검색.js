//순서대로 자료가 분류되어있어야합니다.
// 크기순 혹은 알파벳순이기 떄문에 중간점을 찾아 기준으로 나눕니다.
//분할 정복방법을 활용함

//의사코드
// 1. 배열을 정렬 혹은 분류한다.
// 2. 2개의 변수를 만들자(좌측 포인터,우측 포인터)
// 3. 좌측 우측의 중간위치를 중간값으로 정함.
// 4. 값을 찾으면 반환
// 5. 값이작으면 좌측 포인터를 중간인덱스를 바꿈
// 6. 못찾으면 -1 을 리턴함.

function binarySearch(arr, element) {
  let start = 0;
  let end = arr.length;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== element && start <= end) {
    if (element < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === element) {
    return middle;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
