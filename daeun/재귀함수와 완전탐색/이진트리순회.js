function solution(v){
  let answer;
  function DFS(v){
    if(v>7) return;
    else{
      console.log(v); // 전위순회
      DFS(v*2);
      console.log(v); // 중위순회
      DFS(v*2+1);
      console.log(v); // 후위순회
    }
  }

  DFS(v);
  return answer;
}

solution(1)