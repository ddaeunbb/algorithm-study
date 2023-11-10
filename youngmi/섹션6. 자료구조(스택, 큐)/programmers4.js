/* 프로세스
운영체제의 역할 중 하나는 컴퓨터 시스템의 자원을 효율적으로 관리하는 것입니다. 
이 문제에서는 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다.

1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
  3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.

예를 들어 프로세스 4개 [A, B, C, D]가 순서대로 실행 대기 큐에 들어있고, 우선순위가 [2, 1, 3, 2]라면 [C, D, A, B] 순으로 실행하게 됩니다.

현재 실행 대기 큐(Queue)에 있는 프로세스의 중요도가 순서대로 담긴 배열 priorities와, 
몇 번째로 실행되는지 알고싶은 프로세스의 위치를 알려주는 location이 매개변수로 주어질 때, 
해당 프로세스가 몇 번째로 실행되는지 return 하도록 solution 함수를 작성해주세요. */

const solution = (priorities, location) => {
  let answer = [];
  // 정렬된 우선순위 배열
  let sortedPriorities = [...priorities].sort((a, b) => b - a);

  for (let i = 0; i < priorities.length; i++) {
    // 원래 인덱스 잃지 않기 위해 2차원 배열 형태로 기록
    priorities[i] = [priorities[i], i];
  }

  while (priorities.length) {
    // 프로세스 다 실행 될 때까지 while 돌기
    if (priorities[0][0] < sortedPriorities[0]) {
      // 만약 프로세스의 우선순위가 현재 가장 높은 우선순위보다 낮다면 뒤로 빼주기
      priorities.push(priorities.shift());
    } else {
      // 만약 프로세스의 우선순위가 현재 가장 높은 우선순위와 같다면
      // answer에 shift 해서 넣어주고 현재 가장 높은 우선순위도 그 다음으로 높은 우선순위로 바꿔주기
      answer.push(priorities.shift());
      sortedPriorities.shift();
    }
  }

  for (let i = 0; i < answer.length; i++) {
    // answer 배열 돌면서 location 찾고, 그 위치 인덱스 넘버 + 1 해서 리턴(정답은 1번째부터 세기 때문에)
    if (answer[i][1] === location) return i + 1;
  }
};

let priorities = [2, 1, 3, 2];
let location = 2;
console.log(solution(priorities, location)); // 1
