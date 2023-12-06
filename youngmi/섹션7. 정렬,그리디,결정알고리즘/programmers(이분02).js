/* 징검다리
문제 설명
출발지점부터 distance만큼 떨어진 곳에 도착지점이 있습니다. 그리고 그사이에는 바위들이 놓여있습니다. 바위 중 몇 개를 제거하려고 합니다.
예를 들어, 도착지점이 25만큼 떨어져 있고, 바위가 [2, 14, 11, 21, 17] 지점에 놓여있을 때 바위 2개를 제거하면 출발지점, 도착지점, 바위 간의 거리가 아래와 같습니다.

출발지점부터 도착지점까지의 거리 distance, 바위들이 있는 위치를 담은 배열 rocks, 제거할 바위의 수 n이 매개변수로 주어질 때, 
바위를 n개 제거한 뒤 각 지점 사이의 거리의 최솟값 중에 가장 큰 값을 return 하도록 solution 함수를 작성해주세요.

제한사항
도착지점까지의 거리 distance는 1 이상 1,000,000,000 이하입니다.
바위는 1개 이상 50,000개 이하가 있습니다.
n 은 1 이상 바위의 개수 이하입니다. */

// reference : https://gwang920.github.io/algorithm/progreammers-2-43236/

const solution = (distance, rocks, n) => {
  let answer = 0;
  // 최소 거리
  let min = 1;
  // 최대 거리
  let max = distance;
  rocks.sort((a, b) => a - b);

  // 최소 거리가 최대 거리보다 작거나 같을 때까지 반복
  while (min <= max) {
    // 중간값(= 최솟값 후보)
    let mid = parseInt((min + max) / 2);
    // 제거되는 돌의 개수
    let remove = 0;
    let prev = 0;

    for (let i = 0; i < rocks.length; i++) {
      if (rocks[i] - prev <= mid) {
        remove++;
      } else {
        prev = rocks[i];
      }
    }

    if (remove > n) {
      max = mid - 1;
    } else {
      min = mid + 1;
      answer = Math.max(answer, min);
    }
  }

  return answer;
};

console.log(solution(25, [2, 14, 11, 21, 17], 2)); // 4
