class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

function solution(N, k) {
  const Max = 100001;
  let visited = new Array(Max).fill(0);
  function bfs() {
    let queue = new Queue();
    queue.enqueue(N);
    while (queue.getLength() != 0) {
      let cur = queue.dequeue();
      if (cur == k) {
        return visited[cur];
      }
      for (let nxt of [cur - 1, cur + 1, cur * 2]) {
        if (nxt < 0 || nxt >= Max) continue;
        if (visited[nxt] == 0) {
          visited[nxt] = visited[cur] + 1;
          queue.enqueue(nxt);
        }
      }
    }
  }
  return bfs();
}

console.log(solution(5, 17));
