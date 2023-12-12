function solution(n) {
  if(n < 1) return
  console.log(n);
  solution(n-1);
}

function solution(n) {
  function DFS(L) {
    if(L === 0) return;
    else {
      DFS(L-1);
      console.log(L);
    }
    
  }
  DFS(n);
}


solution(3);