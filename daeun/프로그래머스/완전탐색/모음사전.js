function solution(word) {
  const arr = "AEIOU";
  const result = [];
  
  for(let i = 1; i <= 5; i++){
      combinations('', i);
  }
  
    return result.sort().indexOf(word) + 1
  
  function combinations(current, length){
      if(length === 0){
          result.push(current);
          return
      }
      
      for(let i = 0; i < arr.length; i++){
          combinations(current+arr[i], length-1);
      }
  }
  
}