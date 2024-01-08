function solution(operations) {
  let queue = [];
  for (let i = 0; i < operations.length; i++) {
    let operation = operations[i].split(" ");
    if (operation[0] == "I") {
      queue.push(Number(operation[1]));
    } else {
      const findValue = (operation[1] === "1" ? Math.max : Math.min)(...queue);
      const delIdx = queue.indexOf(findValue);
      queue.splice(delIdx, 1);
    }
  }
  return queue.length ? [Math.max(...queue), Math.min(...queue)] : [0, 0];
}

// 우선순위큐를 구해야하는이유는 최대,최소기준으로해야됨.

console.log(solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]));
console.log(solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]));
