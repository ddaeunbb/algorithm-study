function solution(name) {
  let answer = 0;
  let min_move = name.length - 1;

  [...name].forEach((el, i) => {
    answer += Math.min(el.charCodeAt() - 65, 91 - el.charCodeAt());
    let idx = i + 1;

    while(name[idx] === 'A' && idx < name.length) idx++;

    console.log(idx)
    min_move = Math.min(
      min_move,
      i * 2 + name.length - idx,
      i + 2 * (name.length - idx)
    )
  })
  
  return answer + min_move;
}


console.log(solution('JEROEN')) // 56
console.log(solution('JAZ')) // 11
console.log(solution('JAN')) // 23
console.log(solution('JERAAAAN')) // 23