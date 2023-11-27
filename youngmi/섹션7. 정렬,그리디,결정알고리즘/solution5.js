/* Least Recently Used(카카오 캐시 문제 변형)
캐시메모리는 CPU와 주기억장치(DRAM) 사이의 고속의 임시 메모리로서 CPU가 처리할 작업
을 저장해 놓았다가 필요할 바로 사용해서 처리속도를 높이는 장치이다. 워낙 비싸고 용량이
작아 효율적으로 사용해야 한다. 철수의 컴퓨터는 캐시메모리 사용 규칙이 LRU 알고리즘을 따
른다. LRU 알고리즘은 Least Recently Used 의 약자로 직역하자면 가장 최근에 사용되지 않
은 것 정도의 의미를 가지고 있습니다. 캐시에서 작업을 제거할 때 가장 오랫동안 사용하지
않은 것을 제거하겠다는 알고리즘입니다. 

캐시의 크기가 주어지고, 캐시가 비어있는 상태에서 N개의 작업을 CPU가 차례로 처리한다면
N개의 작업을 처리한 후 캐시메모리의 상태를 가장 최근 사용된 작업부터 차례대로 출력하는
프로그램을 작성하세요.
*/

const solution = (size, arr) => {
  let cache = [];
  for (let i = 0; i < arr.length; i++) {
    if (cache.includes(arr[i])) {
      // cache hit
      let hitIdx = cache.indexOf(arr[i]);
      cache.splice(hitIdx, 1); // hitted part 잘라내기
      cache = [arr[i], ...cache]; // 새 요소 맨 앞에 삽입
    } else {
      // cache miss
      if (cache.length >= size) cache.pop(); // cache가 가득 찼으면 pop해서 맨 뒤 item 제거
      cache = [arr[i], ...cache]; // 새 요소 맨 앞에 삽입
    }
  }
  return cache;

  //reference
  /*
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });

  return answer;
  */
};
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr)); // [7, 5, 3, 2, 6]
