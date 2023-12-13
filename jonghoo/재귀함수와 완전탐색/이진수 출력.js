function solution(n){
    let answer=""
    function DFS(n){
        if(n==1){
             answer+=n
        }
        else{
            
            DFS(parseInt(n/2))
            answer+=n%2;

        }
    }
    DFS(n)
    return answer

}

console.log(solution(11));