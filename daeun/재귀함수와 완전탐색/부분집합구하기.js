function solution(n){
  let ch = Array.from({length: n +1}, ()=>0);
  
  function DFS(v){
    if(v === n+1){
      let temp = "";
      for(let i = 1; i < ch.length; i++){
        if(ch[i] === 1) temp += i += ' ';
      }
      console.log(temp);
    }
    else {
      ch[v] = 1;
      DFS(v+1);
      ch[v] = 0;
      DFS(v+1);
    }
  }

  DFS(1);
}

solution(3);