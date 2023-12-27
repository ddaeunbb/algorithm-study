// 처음 구현했던 코드
// sort를 활용하고 싶지 않았지만...
// while문 내부에서 sort를 사용해면 O^2 으로까지 시간복잡도 증가해서 런타임 에러
// function solution(scoville, K) {
//   // 섞은 횟수
//   let count = 0;
//   scoville.sort((a,b) => a-b);
//   let min = Math.min(...scoville);
  
//   while(min < K){
//       count++;
//       scoville.shift();
//       let next = scoville.shift();
//       let mix = min + next * 2;
//       scoville.push(mix);
//       min = Math.min(...scoville);
//       scoville.sort((a,b) => a-b);
//   }
  
//   return count;
// }


// 우선순위 큐 구현하기
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIdx) => parentIdx * 2 + 1;
  getRightChildIndex = (parentIdx) => parentIdx * 2 + 2;
  getParentIndex = (childIdx) => Math.floor((childIdx -1) / 2);
  peek = () => this.heap[0] // 항상 최상위 노드가 peek이 됩니다.

  insert = (key, val) => {
    const node = { key, val };
    this.heap.push(node);
    this.heapifyUp();
    return this.heap;
  }

  heapifyUp = () => {
    let index = this.heap.length - 1; 
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      // 부모 노드의 key 값이 마지막에 삽입된 노드의 키 값 보다 크다면
      // 부모의 자리를 계속해서 아래로 내린다.
      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex]
        index = parentIndex
      } else break

      this.heap[index] = lastInsertedNode;
    }
  }

  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if(count <= 0) return undefined;
    if(count === 1) return this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }

    return rootNode
  }

  heapifyDown = () => {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    while(this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      const smallerChildIndex = rightChildIndex < count && this.heap[rightChildIndex].key < this.heap[leftChildIndex].key ? rightChildIndex : leftChildIndex;

      if(this.heap[smallerChildIndex].key <= rootNode.key){
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;
    }

    this.heap[index] = rootNode;
  }
}


class Heap extends PriorityQueue {
  constructor() {
    super();
  }

  enqueue = (priority, value) => this.insert(priority, value);
  dequeue = () => this.remove();
  isEmpty = () => this.heap <= 0;
  getQueue = () => this.heap;
}


function solution(scoville, K) {
  const minHeap = new Heap();

  let count = 0;
  for(let i = 0; i< scoville.length; i++){
    minHeap.enqueue(scoville[i], scoville[i]);
  }

  let values = minHeap.getQueue().map(el => el.key);
  while(Math.min(...values) < K) {
    let first = minHeap.dequeue();
    let second = minHeap.dequeue();
    let mix = first.key + second.key * 2;
    const a = minHeap.enqueue(mix, mix);
    values = minHeap.getQueue().map(el => el.key);
    count++;
  }

  return count;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));

// https://jun-choi-4928.medium.com/javascript%EB%A1%9C-heap-priority-queue-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-8bc13bf095d9