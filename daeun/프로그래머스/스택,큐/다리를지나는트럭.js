function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let sum = 0;
  const bridge = Array.from({length: bridge_length}, () => 0);
  
  // 초기셋팅 (1초일때)
  answer++;
  sum += truck_weights[0];
  bridge.shift();
  bridge.push(truck_weights.shift()); 
  
  while(sum > 0){
    // 초 부터 더해주고
    answer++;
    sum -= bridge.shift();
    if(bridge.length < bridge_length && sum + truck_weights[0] <= weight){
      sum += truck_weights[0]; 
      bridge.push(truck_weights.shift())
    } else bridge.push(0);
  }
  return answer
}

console.log(solution(2, 10, [7,4,5,6])); //8
console.log(solution(100, 100, [10])) // 101
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10])) // 110