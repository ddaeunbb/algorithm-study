function solution(distance, rocks, n) {
    var answer = 0;
    rocks.push(distance)
    rocks.push(0)
    rocks.sort((a,b)=>a-b)
   let lt =1;
   let rt =distance;
   while(lt<=rt){
    let mid=parseInt((lt+rt)/2);
    let count=0; now=rocks[0];
  for(let i=1;i<rocks.length;i++){
    if(rocks[i]-now<mid){
        count++;
    } else{
        now=rocks[i]
    }
  }
  if(count>n){
    rt=mid-1;
  }
  else{
    lt=mid+1;
  }
  answer=rt
}
return answer
}
console.log(solution(25,[2, 14, 11, 21, 17],2));