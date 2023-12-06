function solution(string) {
  let answer=0;
 let arr=string.split("-")
 for(let i=0;i<arr.length;i++){
  let test=arr[i].split("+").map(Number)
  let sum= test.reduce((a,b)=>a+b)
  if(i==0){
    answer+=sum;

  }
  else answer-=sum
 }
 return answer
}

console.log(solution("00009-00009"));

// 값을 최소로만드려면
// -() 뒤에수가 가장커야함

// ex 30-40+20-30