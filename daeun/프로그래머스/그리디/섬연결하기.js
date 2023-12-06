// 처음 풀이
function solution(n, costs) {
  let answer = 0;
  // 모든 노드가 연결되어있는지 확인하는 hash
  const hash = new Map();
  for(let i = 0; i < n; i++){
      hash.set(i, 0);
  }
  [1,2,3,4,5]

  costs.sort((a,b)=> a[2] - b[2]);

  for(let j = 0; j < costs.length; j++){
      const [a,b,c] = costs[j];
      const bridgeA = hash.get(a);
      const bridgeB = hash.get(b);
      if(bridgeA === 0 || bridgeB === 0){
          answer += c;
          hash.set(a, bridgeA + 1);
          hash.set(b, bridgeB + 1);        
      } else continue;
      let check = true;
      for(let [key, val] of hash){
          if(val <= 0) check = false;
          if(val >= n - 1){
              check = true;
              break;
          }
      }
      if(check) return answer;
  }
  console.log(hash);
  return answer
}


// 실제 풀이
// 유니온 파인드 알고리즘
const getParent = (parent, x) => {
  if(parent[x] === x) return x;
  return parent[x] = getParent(parent, parent[x]);
}

const unionParent = (parent, a, b) => {
  const n1 = getParent(parent, a);
  const n2 = getParent(parent, b);
  if(n1 < n2) return parent[n2] = n1;
  else return parent[n1] = n2;
}

const findParent = (parent, a, b) => {
  const n1 = getParent(parent, a);
  const n2 = getParent(parent, b);
  if(n1 === n2) return true;
  else return false;
}

function solution(n, costs) {
  let answer = 0;
  const parent = [];
  for(let i = 0; i < n; i++) parent.push(i);
  
  costs.sort((a, b) => a[2] - b[2]);
  
  for(const cost of costs) {
    if(!findParent(parent, cost[0], cost[1])) {
      answer += cost[2];
      unionParent(parent, cost[0], cost[1]);
    }
  }
  
  return answer;
}