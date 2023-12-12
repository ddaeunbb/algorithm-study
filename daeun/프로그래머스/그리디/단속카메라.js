function solution(routes) {
  let answer = 0;
  routes.sort((a,b)=> a[1] - b[1])
  console.log(routes);
  
  for(let i = 0; i < routes.length; i++){
      const fcar = routes[i];
      let idx = i + 1;
      console.log('실제 값:' +  i);
      while(idx < routes.length && fcar[1] >= routes[idx][0] && fcar[1] <= routes[idx][1]) idx++;
      i = idx -1;
      console.log('계산된 값:' +  i);
      answer++;
  }
  return answer
}

console.log(solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]])) // 2