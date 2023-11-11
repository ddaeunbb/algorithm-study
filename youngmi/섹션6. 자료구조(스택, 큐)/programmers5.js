/* 다리를 지나는 트럭
트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 
다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 
단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.

solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 
이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

제한 조건
- bridge_length는 1 이상 10,000 이하입니다.
- weight는 1 이상 10,000 이하입니다.
- truck_weights의 길이는 1 이상 10,000 이하입니다.
- 모든 트럭의 무게는 1 이상 weight 이하입니다.
*/

const solution = (bridge_length, weight, truck_weights) => {
  let answer = 0;

  // 다리 위에 올라간 트럭 배열
  let bridge = Array.from({ length: bridge_length }, () => 0);
  // 현재 시점 다리에 걸린 하중
  let bridge_sum = 0;

  // 1초를 증가시키고, 맨 처음 트럭을 다리에 올린다.
  answer++;
  bridge.shift();
  bridge_sum += truck_weights[0];
  bridge.push(truck_weights.shift());

  // 대기 트럭 배열이 남아있거나 다리 위에 올라간 트럭 배열이 남아있는 동안,
  while (bridge_sum > 0) {
    // 우선 시간이 1초 지났을 때,
    answer++;

    // 큐의 맨 앞을 꺼내고,
    bridge_sum -= bridge.shift();

    // 만약 현재 시점 다리 하중에 다음 트럭의 무게를 더해도 다리가 버틸 수 있다면?
    if (truck_weights.length > 0 && bridge_sum + truck_weights[0] <= weight) {
      // 다음 트럭을 다리 배열에 넣는다.
      bridge_sum += truck_weights[0];
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
  }

  return answer;
};

let bridge_length1 = 2;
let weight1 = 10;
let truck_weights1 = [7, 4, 5, 6];
console.log(solution(bridge_length1, weight1, truck_weights1)); // 8

let bridge_length2 = 100;
let weight2 = 100;
let truck_weights2 = [10];
console.log(solution(bridge_length2, weight2, truck_weights2)); // 101

let bridge_length3 = 100;
let weight3 = 100;
let truck_weights3 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
console.log(solution(bridge_length3, weight3, truck_weights3)); // 110
