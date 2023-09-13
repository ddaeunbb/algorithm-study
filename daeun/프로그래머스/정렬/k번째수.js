// 1. k번째수
function solution(array, commands) {
  commands = commands.map(el => {
      let copy = array.slice(el[0]-1, el[1]);
      copy.sort((a,b)=> a-b);
      console.log(copy)
      return copy[el[2]-1];
  })
  return commands
}