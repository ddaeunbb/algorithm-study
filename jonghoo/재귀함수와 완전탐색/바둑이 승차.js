function solution(weight,arr){
    let check=Array.from({length:arr.length},()=>0)
    let answer=[]
    function DFS(n){
        if(n==arr.length){
            let sum=0;
            for(let i=0;i<arr.length;i++){
                if(check[i]==1){
  sum+=arr[i]
                }
            }
            if(weight>sum) answer.push(sum)

        }
        else{
            check[n]=1
            DFS(n+1)
            check[n]=0
            DFS(n+1)
        }
    }
    DFS(0)
    return Math.max(...answer)

}

console.log(solution(259,[81,58,42,33,61]));