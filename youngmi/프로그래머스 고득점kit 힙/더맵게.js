/* 더 맵게
문제 설명
매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다. 
모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 
Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같이 특별한 방법으로 섞어 새로운 음식을 만듭니다.

섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.
Leo가 가진 음식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때, 
모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return 하도록 solution 함수를 작성해주세요.

제한 사항
scoville의 길이는 2 이상 1,000,000 이하입니다.
K는 0 이상 1,000,000,000 이하입니다.
scoville의 원소는 각각 0 이상 1,000,000 이하입니다.
모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 return 합니다. */

const solution = (scoville, K) => {
  let answer = 0;
  scoville.sort((a, b) => a - b);

  while (scoville[0] < K) {
    if (scoville.length < 2) return -1;

    // 제일 작은 scoville 지수가 K이상일때까지 돌기
    scoville[0] = scoville[0] + scoville[1] * 2;
    scoville.splice(1, 1);
    scoville.sort((a, b) => a - b);
    answer++;
  }

  return answer;

  // reference
  /*
  // 해당 문제는 Heap 구조를 활용해야 함
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    size() {
      return this.heap.length;
    }

    // 값을 넣되, 오름차 순 정렬함
    push(value) {
      this.heap.push(value);
      let currentIndex = this.heap.length - 1;

      while (
        currentIndex > 0 &&
        this.heap[currentIndex] < this.heap[Math.floor((currentIndex - 1) / 2)]
      ) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1) / 2)];
        this.heap[Math.floor((currentIndex - 1) / 2)] = temp;
        currentIndex = Math.floor((currentIndex - 1) / 2);
      }
    }

    // 값을 빼되, 오름차 순 정렬 함
    pop() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();

      const minValue = this.heap[0];
      this.heap[0] = this.heap.pop();
      let currentIndex = 0;

      while (currentIndex * 2 + 1 < this.heap.length) {
        let minChildIndex =
          currentIndex * 2 + 2 < this.heap.length &&
          this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1]
            ? currentIndex * 2 + 2
            : currentIndex * 2 + 1;

        if (this.heap[currentIndex] < this.heap[minChildIndex]) {
          break;
        }

        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[minChildIndex];
        this.heap[minChildIndex] = temp;
        currentIndex = minChildIndex;
      }

      return minValue;
    }

    peek() {
      return this.heap[0];
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
  */
};
console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2
