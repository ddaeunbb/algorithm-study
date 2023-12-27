class Heap {
  constructor() {
    this.heap = [];
  }

  getSize() {
    return this.heap.length;
  }
  getLeftIdx(node) {
    return node * 2 + 1;
  }
  getRightIdx(node) {
    return node * 2 + 2;
  }
  getParentIdx(node) {
    return parseInt((node - 1) / 2);
  }
  swap(x, y) {
    [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]];
  }
  bubbleUp() {
    let target = this.getSize() - 1;
    let parentIdx = this.getParentIdx(target);
    while (this.heap[target][1] < this.heap[parentIdx][1]) {
      this.swap(target, parentIdx);
      target = parentIdx;
      parentIdx = this.getParentIdx(target);
    }
  }
  bubbleDown() {
    let target = 0;
    let leftIdx = this.getLeftIdx(target);
    let rightIdx = this.getRightIdx(target);
    while (
      (this.heap[leftIdx] && this.heap[target][1] > this.heap[leftIdx][1]) ||
      (this.heap[rightIdx] && this.heap[target][1] > this.heap[rightIdx][1])
    ) {
      let small = leftIdx;
      if (this.heap[rightIdx] && this.heap[small][1] > this.heap[rightIdx][1]) {
        small = rightIdx;
      }
      this.swap(target, small);
      target = small;
      leftIdx = this.getLeftIdx(target);
      rightIdx = this.getRightIdx(target);
    }
  }

  pushItem(node) {
    this.heap.push(node);
    this.bubbleUp();
  }

  shiftItem() {
    if (this.getSize() === 0) return null;
    if (this.getSize() === 1) return this.heap.pop();
    let temp = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return temp;
  }
}
function solution(jobs) {
  const heap = new Heap();
  jobs = jobs.sort((a, b) => (a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0]));
  let totalJobs = jobs.length;
  let done = 0;
  let temp = [];
  let current = 0;
  while (done < totalJobs) {
    while (jobs[0] && current >= jobs[0][0]) {
      heap.pushItem(jobs.shift());
    }
    if (heap.getSize()) {
      let [startTime, cost] = heap.shiftItem();
      temp.push(current + cost - startTime);
      current += cost;
      done++;
    } else {
      current++;
    }
  }
  return parseInt(temp.reduce((a, b) => a + b) / temp.length);
}class Heap {
  constructor() {
    this.heap = [];
  }

  getSize() {
    return this.heap.length;
  }
  getLeftIdx(node) {
    return node * 2 + 1;
  }
  getRightIdx(node) {
    return node * 2 + 2;
  }
  getParentIdx(node) {
    return parseInt((node - 1) / 2);
  }
  swap(x, y) {
    [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]];
  }
  bubbleUp() {
    let target = this.getSize() - 1;
    let parentIdx = this.getParentIdx(target);
    while (this.heap[target][1] < this.heap[parentIdx][1]) {
      this.swap(target, parentIdx);
      target = parentIdx;
      parentIdx = this.getParentIdx(target);
    }
  }
  bubbleDown() {
    let target = 0;
    let leftIdx = this.getLeftIdx(target);
    let rightIdx = this.getRightIdx(target);
    while (
      (this.heap[leftIdx] && this.heap[target][1] > this.heap[leftIdx][1]) ||
      (this.heap[rightIdx] && this.heap[target][1] > this.heap[rightIdx][1])
    ) {
      let small = leftIdx;
      if (this.heap[rightIdx] && this.heap[small][1] > this.heap[rightIdx][1]) {
        small = rightIdx;
      }
      this.swap(target, small);
      target = small;
      leftIdx = this.getLeftIdx(target);
      rightIdx = this.getRightIdx(target);
    }
  }

  pushItem(node) {
    this.heap.push(node);
    this.bubbleUp();
  }

  shiftItem() {
    if (this.getSize() === 0) return null;
    if (this.getSize() === 1) return this.heap.pop();
    let temp = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return temp;
  }
}
function solution(jobs) {
  const heap = new Heap();
  jobs = jobs.sort((a, b) => (a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0]));
  let totalJobs = jobs.length;
  let done = 0;
  let temp = [];
  let current = 0;
  while (done < totalJobs) {
    while (jobs[0] && current >= jobs[0][0]) {
      heap.pushItem(jobs.shift());
    }
    if (heap.getSize()) {
      let [startTime, cost] = heap.shiftItem();
      temp.push(current + cost - startTime);
      current += cost;
      done++;
    } else {
      current++;
    }
  }
  return parseInt(temp.reduce((a, b) => a + b) / temp.length);
}

solution([[0, 3], [1, 9], [2, 6]]);

// function solution(jobs) {
//   let total = jobs.length;
//   let answer = 0;
//   let tick = 0;
//   let queue = [];
  
//   while(true){
//     // 1. (jobs가 있을 때) tick보다 같거나 작은 작업 모두 추출 후 queue에 삽입
//     let index = 0;
//     while(true){
//       if(index >= jobs.length) break;
//       if(jobs[index][0] <= tick){
//         // 요청이 들어온 작업
//         queue.push(jobs.splice(index,1)[0]);
//       }else{
//         // 요청 전 작업
//         index++;
//       }
//     }

//     // 3. queue와 jobs가 0이면 끝
//     if(queue.length ===0 ){
//       if(jobs.length ===0){
//         break;
//       }else{
//         tick++;
//       }
//     }else {
//          // 2. (queue가 있을 때) queue에서 작업량이 가장 작은 작업 수행
//     let minIndex = 0;
//     for(let i = 1 ; i < queue.length ; i++){
//         if(queue[minIndex][1] > queue[i][1]) minIndex=i
//     }
//     // 2.1 수행한 시간 만큼 tick 증가
//     tick += queue[minIndex][1]
//     // 2.2 answer += tick - 수행한 작업의 작업 처리 요청 시간 
//     answer += tick - queue[minIndex][0]
//     // 2.3 queue에서 해당 job 삭제
//     queue.splice(minIndex,1)
//     }
//   }
//   return Math.floor(answer/total)
// }


// solution([[0, 3], [1, 9], [2, 6]]);