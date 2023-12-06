function solution(n, times) {
    times.sort((a,b)=>a-b)
    let lt=1;
    let rt=n*times[times.length-1]
  
    while(lt<=rt){
      let mid =parseInt((lt+rt)/2)
      let cnt=0;
      for(let i=0;i<times.length;i++){
        let priority=mid;
        cnt+=Math.floor(priority/times[i])
      }

      if(cnt>=n){
        rt=mid-1;
      } else{
        lt=mid+1
      }
      
    }
    return lt
}

console.log(solution(6,	[7, 10]));