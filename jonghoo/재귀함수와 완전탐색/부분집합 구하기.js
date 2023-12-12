function solution(n){
    let check=Array.from({length:n+1},()=>0)
    let answer=[]
    function DFS(L){
        if(L==n+1){
            let tmp=""
            for(let i=0;i<n+1;i++){
                if(check[i]==1){
                       tmp+=i+" "
                }
            }
            if(tmp.length>0) answer.push(tmp.trim())

        }
        else {
            check[L]=1;
            DFS(L+1)
            check[L]=0;
            DFS(L+1)

        }

    }
    DFS(1)
    return answer

}

console.log(solution(3));