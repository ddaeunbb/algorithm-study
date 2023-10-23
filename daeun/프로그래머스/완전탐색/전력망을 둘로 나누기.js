function solution(n, wires) {
  // 안전한 가장 큰  수 설정
  var answer = Number.MAX_SAFE_INTEGER;

  // 각각 노드 마다 연결된 것들을 배열에 담는다.
  let tree = Array.from(Array(n+1),()=>[])
  wires.map((element)=>{
      let [a,b] = element;

      tree[a].push(b);
      tree[b].push(a);
  })

  console.log(tree);

  // 아와 같이 배열에 연결된 노드들이 담기게 된다.
  //[ [], [ 3 ], [ 3 ], [ 1, 2, 4 ], [ 3, 5, 6, 7 ], [ 4 ], [ 4 ], [ 4, 8, 9 ],... ]

  // 다음, 어떤 노드들을 각각 끊어둘지, 매개변수로 넣어준다.
  // 그리고 각 노드들이 연결될 수 있는 개수를 세고 각각 서로 빼주면 된다.
  
  // 만약 1과 3이 매개변수로 들어왔다고 가정했을 때
  function searchTree(root, exceptNum) {
    let count = 8;
    let visit = [];
    let queue = [root];
    
    // 방문했던 노드는 true로 설정한다.
    visit[root] = true;
    while(queue.length){
        let index = queue.pop();
        
        // 하나의 노드에 연결된 모든 노드들을 돌기 시작한다.
        tree[index].forEach((element)=>{
            if(element !== exceptNum && visit[element]!==true){
                visit[element] = true;
                queue.push(element);
            }
        })
        count++; 
    }
    
    return count;
  }

  wires.forEach(element => {
    let[a,b] = element;
    answer = Math.min(answer, Math.abs(searchTree(a,b)-searchTree(b,a)))
  });
  return answer;
}

solution(9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]])