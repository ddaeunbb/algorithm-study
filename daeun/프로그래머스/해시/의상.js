function solution(clothes) {
  const dict = {};
  let sum = 1;
  clothes.forEach(cloth => {
      const [each, kind] = cloth;
      if(dict[kind]) dict[kind]++;
      else dict[kind] = 1;
  })
  
  for(let el in dict){
      sum *= (dict[el]+1);
  }
  
  return sum - 1;
}