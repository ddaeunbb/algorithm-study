function solution(limit,arr){
    let check=Array.from({length:arr.length},()=>0)
    let answer=0;
    function DFS(n){
        let score=0;
        let time=0;
        if(n==arr.length){
            for(let i=0;i<arr.length;i++){
                if(check[i]==1){
                     score+=arr[i][0]
                     time+=arr[i][1]
                }
            }
            if(limit>=time){
                answer=Math.max(answer,score)
            }

        }
        else{
            check[n]=1;
            DFS(n+1)
            check[n]=0;
            DFS(n+1)

        }

    }
    DFS(0)
    return answer

}

console.log(solution(20,[[10,5],[25,12],[15,8],[6,3],[7,4]]));