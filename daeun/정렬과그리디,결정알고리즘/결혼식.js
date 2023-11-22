// 8. 결혼식

// 12시 ~ 72시사이
function solution(arr) {
  const hash = new Map();
  arr.forEach(el => {
    const [a, b] = el;
    for(let i = a; i < b; i++){
      if(hash.has(i)) hash.set(i, hash.get(i) + 1);
      else hash.set(i, 1);
    }
  })

  return Math.max(...hash.values());
}

function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let T_line = [];
  for(let x of times){
    T_line.push([x[0], 's']);
    T_line.push([x[1], 'e']);
  }
  T_line.sort((a,b)=> {
    if(a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  })

  let cnt = 0;
  for(let x of T_line){
    if(x[1] === 's') cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
}

console.log(solution([[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]]));
