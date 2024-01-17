/* 여행경로
주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다.
항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 
방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한사항
- 모든 공항은 알파벳 대문자 3글자로 이루어집니다.
- 주어진 공항 수는 3개 이상 10,000개 이하입니다.
- tickets의 각 행 [a, b]는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미입니다.
- 주어진 항공권은 모두 사용해야 합니다.
- 만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
- 모든 도시를 방문할 수 없는 경우는 주어지지 않습니다. */

const solution = (tickets) => {
  const answer = [];
  // 모든 항공권을 이용하여 여행경로를 짜게되면 tickets의 길이 + 1 개의 도시를 방문하게 된다.
  const goal = tickets.length + 1;
  // 이미 사용한 항공권을 표시해둘 ch 배열
  const ch = Array.from({ length: tickets.length }, (_) => 0);

  const dfs = (path) => {
    if (path.length === goal) {
      // 모든 항공권 다 이용해서 tickets길이 + 1 개의 도시 방문했다면 이번 path를 answer에 넣기
      answer.push(path);
    } else {
      // 아직 모든 항공권 이용하지 않았으면
      for (const i in tickets) {
        if (ch[i] === 0) {
          // 사용하지 않은 항공권이면서
          const [start, end] = tickets[i];
          if (path[path.length - 1] === start) {
            // 현재까지 거쳐간 모든 도시가 들어있는 path의 맨 마지막 도시에서 출발하는 항공권이라면
            // 해당 항공권에 대해 사용했다는 표시로 ch 배열에 1로 변경해주고 path에 해당 도시를 추가하여 다음으로 넘어간다
            ch[i] = 1;
            dfs([...path, end]);
            //dfs 끝내고 나올 때는 ch배열 다시 0으로
            ch[i] = 0;
          }
        }
      }
    }
  };

  dfs(["ICN"]);

  return answer.sort()[0];
};

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
