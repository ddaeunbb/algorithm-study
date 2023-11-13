function solution(priorities, location) {
  const name = Array.from({length : priorities.length}, (v,i) => i);
  
  while(priorities.length){
      let standard = priorities.shift(); 
      let check = priorities.some(el => el > standard); 
      if(check){
          priorities.push(standard);
          let back = name.shift();
          name.push(back);
      } else {
          priorities.unshift(standard);
          break;
      }
  }
  return name.indexOf(location) + 1;
}


function solution(priorities, location) {
  let answer = 0;
  const arr = priorities.map((priority, idx)=> ({priority, idx}));
  
  while(arr.length){
    const first = arr.shift();
    if(arr.some(el => el.priority > first.priority)) arr.push(first);
    else {
      answer++; 
      if(first.idx === location) break;
    }
  }
  return answer;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));