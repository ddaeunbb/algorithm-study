// 5. Least Recently Used(카카오 캐시 문제 변형)
// queue에 없을 때,
// 1) queue의 길이가 s보다 크면 맨뒤를 pop 하고, 맨앞에 unshift 해준다.
// 2) 길이보다 작다면 그냥 unshift해준다.

// queue에 있을 때,
// 1) index를 찾고, splice 해준다. (index, 1);
// 2) splice한 요소를 unshift해준다.

// Queue를 사용한 풀이
function solution(s, arr) {
  const queue = [];
  for(let i = 0; i < arr.length; i++){
    const idx = queue.indexOf(arr[i]);
    // queue에 없을 때,
    if(idx < 0){
      if(queue.length >= s) queue.pop();
      queue.unshift(arr[i]);
    }
    // queue에 있을 때,
    else {
      const work = queue.splice(idx, 1);
      queue.unshift(...work);
    }
  }
  return queue;
}

console.log(solution(5, [1,2,3,2,6,2,3,5,7])) // [7,5,3,2,6];

// 삽입 정렬을 사용한 풀이
function solution(s, arr) {
  let answer = Array.from({length: s}, () => 0);
  arr.forEach(x => {
    let pos = -1;
    for(let i = 0; i < s; i++) if( x === answer[i]) pos = i;
    if(pos === -1){
      for(let i = s-1; i >= 1; i--){
        answer[i] = answer[i-1];
      }
    }
    else {
      for(let i = pos; i >= 1; i--){
        answer[i] = answer[i-1];
      }
    }
    answer[0] = x;
  })
  return answer;
}

console.log(solution(5, [1,2,3,2,6,2,3,5,7]))