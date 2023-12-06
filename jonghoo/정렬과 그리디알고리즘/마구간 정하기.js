function solution(arr,m){
    arr.sort((a,b)=>a-b)
    let lt=1;
    let rt=arr[arr.length-1]
    while(lt<=rt){
        let mid =parseInt((lt+rt)/2)
        let temp=arr[0];
        let cnt=1;
        for(let i=1;i<arr.length;i++){
            if(arr[i]-temp<mid){
                cnt++
  
            }
            else temp=arr[i]
        }
        if(cnt>m){
            rt=mid-1;
        }
        else{ lt=mid+1}
        answer=rt;
    }
    return answer
    
}

console.log(solution([1,2,8,4,9],3));