function solution(n, times) {
    var answer = 0;
    let arr=[]
    let cycle=1;
    while(cycle<=n){
      for(let i=0;i<times.length;i++){
        arr.push(times[i]*cycle)
      }
      cycle++
    }

    arr.sort((a,b)=>a-b)

    return arr[n-1]
}

console.log(solution(6,	[7, 10]));