function solution(operations) {
  var answer = [];
  operations.forEach(v => {
    console.log(answer)
    const [op, num] = v.split(' ');
    if (op === 'I') answer.push(parseInt(num));
    if (op === 'D') {
      if (num == 1) answer.splice(answer.indexOf(Math.max(...answer)), 1);
      if (num == -1) answer.splice(answer.indexOf(Math.min(...answer)), 1);
    }
  })

  return [Math.max(...answer)|0 , Math.min(...answer)|0];
}

// solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]);
// solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]);