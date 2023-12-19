function solution(N,K,arr,M){
    let answer=0;
    let check=Array.from({length:N},()=>0)

    function DFS(L,start){
        if(L==K){
            let sum=0;
            console.log(check)
            for(let i=0;i<N;i++){
                if(check[i]==1){
                    sum+=arr[i]
                }
            }

            if(sum%M==0){
                answer++
            }

        }
        else{
            for(let i=start;i<N;i++){
                check[i]=1;
                DFS(L+1,i+1);
                check[i]=0;
            }
        }
    }

DFS(0,0)
return answer
}

console.log(solution(5,3,[2,4,5,8,12],6));