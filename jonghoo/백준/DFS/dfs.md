정리내용
DFS 는 스택구조(선입후출방식의 구조의 자료구조)

그래프의 표현
2차원 배열(리스트)로 그래프를 표현한다.
인접리스트로 표현

깊이 우선탐색이란?

그래프 혹은 트리에서 모든 노드를 한번씩 탐색하기 위한 기본적인 방법이다.
완전탐색을 수행하기 위해 사용할수있는 가장 간단한방법이다.

기본동작방식
시작 노드를 스택에 넣고 방문처리한다.
스택에 마지막으로 들어 온 노드에 방문하지않은 인접노드가 있는지 확인합니다.
있다면? 방문하지않은 인접노드를 스택에 삽입하고 방문처리한다.
없다면 현재 노드를 스택에서 추출한다.
2번과정을 더이상 반복할수 없을때까지 반복한다.
구현
DFS 는 스택 혹은 재귀함수를 사용해 구현한다.
(재귀함수는 (스택과 동일한 동작 원리를 가진다.) 구현이 굉장히 편리하다.)

Note
재귀함수도 쌓인 순서대로 빠져야지 원래께 빠질수있기떄문이다.

완전 탐색을 목적으로 하는경우 탐색속도가 BFS 보다 느린경향이있다.
-> 구현이 편리하기떄문에 DFS를 사용하는 경우 또한많다.

사용예시
더 짧은 코드로 간결히 구현해야하는 경우
큐 라이브러리를 사용할수 없는 경우(BFS)
트리의 순회, 점화식 구현 등(재귀구조)에 특화된 문제인 경우
트리에서 최단 거리 탐색을 구하는 경우
트리에서는 두 노드를 잇는 경로가 하나만 존재한다.
구현코드
function DFS(graph,v,visited){
visitied[v]=true;
console.log(v);
for(i of graph[v]){
if(!visited[i]){
dfs(graph,i,visited)
}
}
}
Notes
Highlights
연결문서
