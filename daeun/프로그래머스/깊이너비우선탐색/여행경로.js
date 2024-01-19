// 런타임 에러
function solution(tickets) {
  const answer = ['ICN'];
  const ticketsH = new Map(); // ICN { ATL, SFO} 
  const visited = new Map();

  const len = tickets.length;
  tickets.sort(); // 티켓 이름별로 정리

  tickets.forEach(([a,b])=> {
    if(ticketsH.has(a)) {
      const arr = ticketsH.get(a);
      arr.push(b);
    }
    else ticketsH.set(a,[b]);
  })

  function DFS(land, count){
    if(count === len) return;
    else {
      const connect = ticketsH.get(land); // []
      for(let i = 0; i < connect.length; i++){
        if(!visited.get(`${land}-${connect[i]}`)) {
          visited.set(`${land}-${connect[i]}`, true);
          answer.push(connect[i]);
          DFS(connect[i], count + 1);
          break;
        }
      }
    }
  }

  DFS('ICN', 0);

  return answer
}

function solution(tickets) {
  let answer = [];
  const result = [];
  const visited = [];
  
  tickets.sort();
  
  const len = tickets.length;
  const dfs = (str, count) => {
    result.push(str);
    
    if(count === len) {
      answer = result;
      return true;
    }
    
    for(let i = 0; i < len; i++) {
      if(!visited[i] && tickets[i][0] === str) {
        visited[i] = true;
        
        if(dfs(tickets[i][1], count+1)) return true;
        
        visited[i] = false;
      }
    }
    
    result.pop();
    
    return false;
  }
  
  dfs("ICN", 0);
  
  return answer;
}

console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]));
console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]));