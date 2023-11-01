function solution(participant, completion) {
  const nameHash = new Map();
  
  for(let alpha of completion){
      if(nameHash.has(alpha)) nameHash.set(alpha, nameHash.get(alpha)+1);
      else nameHash.set(alpha, 1);
      // 	["eden", "kiki"]
  }
  
  for(let alpha of participant){
      if(!nameHash.get(alpha) || nameHash.get(alpha) === 0) return alpha
      else nameHash.set(alpha, nameHash.get(alpha)-1);
  }
}