// ver.1
// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   swap(index1, index2) {
//     [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
//   }

//   getLeftChildIndex(parentIndex){ return parentIndex * 2 + 1 }
//   getRightChildIndex(parentIndex){ return parentIndex * 2 + 2 }
//   getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2) }

//   size() {
//     return this.heap.length;
//   }
      
//     // 값을 넣되, 오름차 순 정렬함
//   push(value) {
//     this.heap.push(value);
//     let idx = this.heap.length - 1;

//     while (idx > 0) {
//       const parentIndex = this.getParentIndex(idx);
//       if(this.heap[idx] < this.heap[parentIndex]) this.swap(idx, parentIndex);
//       else break;
//       idx = parentIndex;
//     }
//   }

//     // 값을 빼되, 오름차 순 정렬 함
//   pop() {
//     const count = this.size();
//     if (this.heap.length === 0) return null;
//     if (this.heap.length === 1) return this.heap.pop();

//     const rootNode = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     let idx = 0;

//     while (this.getLeftChildIndex(idx) < this.heap.length) {
//       const rightChildIndex = this.getRightChildIndex(idx);
//       const leftChildIndex = this.getLeftChildIndex(idx);
//       let minChildIndex = rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex] ? rightChildIndex : leftChildIndex;

//       if (this.heap[idx] < this.heap[minChildIndex]) break;

//       this.swap(idx, minChildIndex);
//       idx = minChildIndex;
//     }

//     return rootNode;
//   }

//   peek() {
//     return this.heap[0];
//   }
// }


// ver.2
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }
  
  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  size() {
    return this.heap.length;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if(this.heap.length === 0) return null
    if(this.heap.length === 1) return this.heap.pop();
    
    const rootNode = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return rootNode;
  }

  peek() {
    return this.heap[0]
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIndex = this.getParentIndex(index);

    while
    (
      this.heap[parentIndex] && 
      this.heap[parentIndex] > this.heap[index]
    ) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;
    let leftIndex = this.getLeftChildIndex(index);
    let rightIndex = this.getRightChildIndex(index);

    while(
      (this.heap[leftIndex] && this.heap[leftIndex] < this.heap[index]) ||
      (this.heap[rightIndex] && this.heap[rightIndex] < this.heap[index])
    ) {
      let smallerIndex
      if(this.heap[rightIndex] && this.heap[rightIndex] < this.heap[leftIndex]) {
        smallerIndex = rightIndex;
      } else smallerIndex = leftIndex;

      this.swap(index, smallerIndex);
      index = smallerIndex;
      leftIndex = this.getLeftChildIndex(index);
      rightIndex = this.getRightChildIndex(index);
    }
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  for (const sco of scoville) {
    minHeap.push(sco);
  }

  let mixedCount = 0;

  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const mixedScov = first + second * 2;
    minHeap.push(mixedScov);
    mixedCount++;
  }

  return minHeap.peek() >= K ? mixedCount : -1;
}


console.log(solution([1, 2, 3, 9, 10, 12], 7));