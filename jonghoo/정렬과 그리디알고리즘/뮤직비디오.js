function solution(M,arr){
    let answer=[]
    let total=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i]

    }
    let pri =total/M
    total=0;
    let test=[]
    for(let i=0;i<arr.length;i++){
        if(i==arr.length-1){
            total+=arr[i]
            test.push(total)
            break;
        }
       if(total+arr[i]>pri){
        test.push(total)
        total=0;
        total+=arr[i]
       }
       else {total+=arr[i]}

    }
    return Math.max(...test)


}

console.log(solution(3,[1,2,3,4,5,6,7,8,9]));