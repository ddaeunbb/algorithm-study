function solution(sizes) {
  let row = 0, column = 0;
  
  sizes = sizes.map(size => {
      let sorting = size.sort((a,b)=> a-b);
      return sorting;
  })
  
  for(let i = 0; i < sizes.length; i++){
      if(row < sizes[i][0]) row = sizes[i][0];
      if(column < sizes[i][1]) column = sizes[i][1];
  }
  return row * column
}