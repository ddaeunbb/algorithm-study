function solution(arr,M){
    let answer
    arr.sort((a,b)=>a-b)
    let lt=1;
    let rt=arr.reduce((a,b)=>a+b)
    while(lt<=rt){
        let mid=parseInt((lt+rt)/2)    
        let cnt=1;
        let sum=0;
        for(let i=0;i<arr.length;i++){
            if(sum+arr[i]>mid){
                cnt++;
                sum=arr[i]
            }
            else sum+=arr[i]
        }
        if(cnt<=M){
            answer=mid;
            rt=mid-1
        }
        else lt=mid+1
    }
    return answer

}

console.log(solution([1,2,3,4,5,6,7,8,9],3));

