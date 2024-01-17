/* 단어 변환
문제 설명
두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 
아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
2. words에 있는 단어로만 변환할 수 있습니다.
예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 
"hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.

두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 
최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.

제한사항
- 각 단어는 알파벳 소문자로만 이루어져 있습니다.
- 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
- words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
- begin과 target은 같지 않습니다.
- 변환할 수 없는 경우에는 0를 return 합니다. */

const solution = (begin, target, words) => {
  const visited = { [begin]: 0 };
  const queue = [begin];

  // BFS 탐색
  while (queue.length) {
    const cur = queue.shift();

    // 이번에 살펴볼 단어가 target과 같으면 while문 탈출
    if (cur === target) break;

    // words의 단어들 하나씩 확인
    for (const word of words) {
      if (isConnected(word, cur) && !visited[word]) {
        // 연결(현재 문자열의 노드와 단 하나의 철자만 다른 문자열을 가진 노드)은 되어있지만 아직 방문하지 않은 경우라면,
        // 방문여부를 활성화하는데 이때 현재 deps 값을 넣어준다.
        // 위에서 설명했듯 현재 deps는 이전 deps + 1 이다.
        visited[word] = visited[cur] + 1;
        queue.push(word);
      }
    }
  }

  // target에 도달했으면 키에 해당하는 값 반환. 도달 못하면 0 반환
  return visited[target] ? visited[target] : 0;
};

const isConnected = (str1, str2) => {
  // 단어 2개를 받아서 일치하는 문자 개수가 한개면 true 아니면 false 반환하는 함수
  let count = 0;
  const len = str1.length;

  for (let i = 0; i < len; i++) {
    if (str1[i] !== str2[i]) count++;
  }

  return count === 1 ? true : false;
};

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4
